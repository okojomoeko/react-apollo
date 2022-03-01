# react-apollo

本来ならば apollo-server で graphql の schema と codegen.yml を管理すべきでない。
フロントエンドと生成された型定義と schema を共有する必要があるため。

なので、apollo-server で生成された型と schema を my-app にコピーしている。

`my-app`で`npm i`して、`npm start`して`localhost:3000`ひらく

`apollo-server`で`npm run dev`して`localhost:4000`で graphql server ひらく

フロントエンド画面でボタン押して情報取得する

## 参考

- https://zenn.dev/intercept6/articles/3daca0298d32d8022e71
