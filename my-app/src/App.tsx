import React, { useState } from "react";

import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Book } from "./types/generated/graphql";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem("token");
  const token = "dummy";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
// const getBooks = async () => {
//   const result = await client.query({
//     query: gql`
//       query GetBooks {
//         books {
//           author
//           title
//         }
//       }
//     `,
//   });
//   return result;
// };

const ShowBooks = () => {
  const { loading, error, data } = useQuery(gql`
    {
      books {
        author
        title
      }
    }
  `);
  if (loading) return <p>Loading ... </p>;
  if (error) return <p>Error </p>;
  console.log(data);
  return data.books.map((book: Book) => {
    return (
      <div key={book.title}>
        <p>
          {book.title}: {book.author}
        </p>
      </div>
    );
  });
};

function App() {
  const [showFlag, setShowFlag] = useState(false);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <button
            onClick={() => {
              setShowFlag(showFlag ? false : true);
            }}
          >
            Get Books
          </button>

          {showFlag ? <ShowBooks /> : <p>表示していません</p>}
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
