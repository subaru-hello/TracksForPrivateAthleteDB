# サイト概要
今日一般開放されている競技場を検索できるサービスです。　<br />
社会人アスリート（陸上競技を趣味としている方）向けに作成しました。 <br/>
url: https://hurdle.biz

### 作成背景
川崎市中原区の等々力競技場で練習を使用と思って足を運んだ際、受付で「今日は個人向けに貸し出しはしていません」と言われたことがきっかけです。
また、他の都道府県へ遠征した時に、練習場所を探す時に苦労したこともあり、等々力競技場だけでなく全国の一般開放されている競技場情報が集約されていたら便利だなと考えました。

### 機能概要

### 使用技術
- フロントエンド

```
React v18
Typescript
Vite
ChakraUI
```
- バックエンド

```
Firebase Storage
Firebase Cloud Firestore
Firebase Authentication
```

- インフラ
```
Firebase Hosting
```
- その他
```
Open API スキーマ駆動開発をした際に使用しました。
```
### テーブル設計

### データ収集方法
pythonを用いてデータを収集しました。<br/>
PDFで個人向けに開放されている日を管理している市区町村が多く存在していたため、サイトからPDFを取得し、CSVに書き起こす作業をpythonで実施しました。<br/>
方法を下記記事にまとめています。↓↓<br/>
https://zenn.dev/subaru_hello/articles/73253a46a76f7f <br/>

https://zenn.dev/subaru_hello/articles/570e9e990374a6 <br/>

https://zenn.dev/subaru_hello/articles/38624760719abf
