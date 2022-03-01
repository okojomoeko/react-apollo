# react-apollo

本来ならば apollo-server で graphql の schema と codegen.yml を管理すべきでない。
フロントエンドと生成された型定義と schema を共有する必要があるため。

なので、apollo-server で生成された型と schema を my-app にコピーしている

## 参考

- https://zenn.dev/intercept6/articles/3daca0298d32d8022e71
