# drizzle-todo (drizzle 練習用)

* [Next.js（App Router） + shadcn/ui + drizzle orm + supabaseで簡易的TODOアプリ](https://zenn.dev/mino_n/articles/efc479fbb73bd3)

## TODO

* タスク追加時にリスト (一覧) を更新


## メモ

### drizzle-kit ライブラリ

* drizzle-kitは、TypeScriptで書かれたデータベースマイグレーションツール。データベーススキーマの変更を管理し、それらの変更をデータベースに適用するための機能を提供します。
* データベーススキーマを TypeScript の型として表現することで、型安全なデータベース操作を可能にします。また、マイグレーションの生成と適用、データベースの状態の管理など、データベースマイグレーションに関連する一般的なタスクをサポートします。
* `drizzle.config.ts` には、データベース接続情報やマイグレーションファイルの出力先など、drizzle-kit の設定が記述されます。この設定ファイルは、drizzle-kit のコマンドラインツールから参照されます。
* `package.json` の `scripts` セクションには、drizzle-kit のコマンドを使用したスクリプトが定義されています。`npm run db:generate` や `npm run db:push` のようなコマンドを実行することで、マイグレーションの生成や適用を行うことができます。

#### TypeScript の `satisfies`

* [TypeScript: satisfiesオペレーターの使い所のひとつとして #TypeScript - Qiita](https://qiita.com/suin/items/1b74645158263d2fa9af)

