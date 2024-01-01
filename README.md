# Tampermonkey TypeScript Project

這個專案是使用 TypeScript 開發 Tampermonkey 用戶腳本的範例。
它允許你使用 ES6 語法來 `import` 各種庫，並通過 `yarn build` 命令來構建最終的用戶腳本。

## 功能

- 使用 TypeScript 編寫 Tampermonkey 腳本
- 支持 ES6 `import` 語法來引入外部庫
- 使用 Yarn 來管理依賴和構建腳本

## 開始使用

要開始使用這個專案，請先確保你已經安裝了 [Node.js](https://nodejs.org/) 和 [Yarn](https://yarnpkg.com/)。

1. 安裝依賴：

```bash
yarn install
```

2. 開始開發你的用戶腳本：

編輯 `src` 目錄下的 `.ts` 檔案。

3. 構建你的用戶腳本：

```bash
yarn build
```

構建後的腳本將在 `dist` 目錄下生成。


### 規定

1. 只會 build 無 export 的 ts 檔案
2. 發布位置在 dist 資料夾
3. ts 檔案, 自我管理其 `UserScript` 區段, lib 使用的 `grant UserScript` 也是自我管理