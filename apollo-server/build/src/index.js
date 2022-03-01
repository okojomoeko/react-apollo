"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const load_1 = require("@graphql-tools/load");
const graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
const schema_1 = require("@graphql-tools/schema");
const path_1 = require("path");
// サンプルデータの定義
const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];
// スキーマの定義
const schema = (0, load_1.loadSchemaSync)((0, path_1.join)(__dirname, '../schema.graphql'), {
    loaders: [new graphql_file_loader_1.GraphQLFileLoader()],
});
// リゾルバーの定義 (型のサポートを受けれる)
const resolvers = {
    Query: {
        books: (_parent, _args, _context) => {
            // TODO: 詳細な認可処理を行う
            return books;
        },
    },
};
const schemaWithResolvers = (0, schema_1.addResolversToSchema)({ schema, resolvers });
const getUser = (token) => {
    if (token === undefined) {
        throw new apollo_server_1.AuthenticationError('認証されていないユーザーはリソースにアクセスできません');
    }
    // TODO: Tokenからユーザー情報を取り出す処理
    return {
        name: 'dummy name',
        email: 'dummy@example.com',
        token,
    };
};
// サーバーの起動
const server = new apollo_server_1.ApolloServer({
    schema: schemaWithResolvers,
    context: ({ req }) => ({
        user: getUser(req.headers.authorization),
    }),
    debug: false, // エラーレスポンスにスタックトレースを含ませない、開発環境ではtrueにした方が分析が捗りそう
});
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map