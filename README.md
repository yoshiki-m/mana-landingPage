# 現在の公開方法
https://zenn.dev/mt5/articles/5d784cf542986f
を参照
ビルド
npm run build
確認
npm run start
buildの中身をdocsにコピー(うまくいかないなら、Finderでやっても良い)
cp -r build ./docs
GitHubにpush
GitHubPagesの設定により、mainブランチの/docsが表示される。

# 昔の公開方法
react-landing-page
ローカルで実行
yarn start
デプロイ
#デプロイ
git init
yarn run deploy 

https://yoshiki-m.github.io/mana-landingPage
