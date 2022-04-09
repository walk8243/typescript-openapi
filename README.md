# TypeScript OpenAPI

OpenAPIを使ってTypeScriptで書かれたAPIのドキュメントを作成作ってみる

## Usage

```sh
$ npm ci
$ npm run build
$ npm start
```

## Swagger

OpenAPIを用いて実装しています。

http://localhost:3000/swagger-ui/

## Development

以下は、Swaggerを用いたスキーマ駆動開発の場合の手順である。

### 1. APIのインターフェースを定義する

インターフェースの定義には、[Swagger Editor](https://editor.swagger.io/)を用いる。

VSCodeを使う場合には、拡張機能の[OpenAPI (Swagger) Editor](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi)で代用することもできる。

### 2. 定義から型に変換する

### 3. 定義を基にAPIを開発する

### 4. APIが定義通りか検証する

### 5. リリースする

## 参考

- [Swagger Documentation](https://swagger.io/docs/specification/about/)
- [OpenAPI (Swagger) 超入門 - Qiita](https://qiita.com/teinen_qiita/items/e440ca7b1b52ec918f1b)
- [Swagger Editor](https://editor.swagger.io/)
