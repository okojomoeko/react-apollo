# react-apollo

GraphQL を試すための apollo-server のサンプル。

apollo-server を typescript で建てて、react 使って graphql api を叩く。

フロントエンド側で生成された型定義と schema を共有する必要があるため。本来ならば `apollo-server` で graphql の schema と codegen.yml を管理しなくても良い。

なので、`apollo-server` で生成された型と schema を my-app にコピーしている。

## Usage

`docker-compose up -d`して、`localhost:3000`を開く

or

各ディレクトリで`npm i`で package install して、

`my-app`で`npm start`、`apollo-server`で`npm run dev`して、
`localhost:3000`開く

フロントエンド画面でボタン押して情報取得する。

## 参考

- https://zenn.dev/intercept6/articles/3daca0298d32d8022e71
