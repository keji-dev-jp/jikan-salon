# jikan salon

時間を大切にする女性のためのライフスタイルメディア

## GitHub Pages URL

https://keji-dev-jp.github.io/jikan-salon/

## 資産運用ルール

- **サイト名 `jikan salon` は常に太字（font-weight: 700）で表示する**
- **フッターロゴは `assets/img/logo-footer.svg` を専用資産として使用する**
  - `filter: brightness / invert` での白化回避に依存しない
  - 白い四角が表示された場合は即時修正する
- **共通コンポーネント（ヘッダー・フッター）は `assets/js/components.js` で一元管理**
- **ファイル追加・変更・削除時は必ず README も更新する**
- **絵文字アイコンは使用しない。SVGアイコン (`assets/img/icons/`) を使用する**
- **記事ページは `article/` 以下に配置し、`article.css` を追加読み込みする**
- **お問い合わせフォームは Formspree を使用。`YOUR_FORM_ID` を実際のIDに差し替える**

## サイト構成

```
jikan-salon/
├── index.html                    # トップページ
├── concept/index.html            # コンセプト
├── category/
│   ├── beauty/index.html         # 美容・スキンケア
│   ├── health/index.html         # 健康・ウェルネス
│   ├── career/index.html         # キャリア・ワーク
│   ├── interior/index.html       # インテリア・整理収納
│   ├── lifestyle/index.html      # ライフスタイル
│   └── time/index.html           # 時間術・干し方改善
├── article/
│   └── template/index.html       # 記事テンプレート（複製して使用）
├── affiliate/index.html          # おすすめアイテム
├── shop/index.html               # デジタル商品
├── contact/index.html            # お問い合わせ
├── 404.html                      # 404ページ
├── sitemap.xml                   # SEOサイトマップ
├── robots.txt                    # クローラー設定
└── assets/
    ├── css/
    │   ├── style.css             # 全体スタイル（共通）
    │   └── article.css           # 記事ページ専用スタイル
    ├── js/components.js          # ヘッダー・フッター共通コンポーネント
    └── img/
        ├── logo.png              # ヘッダー用ロゴ（明るい背景向け）
        ├── logo-footer.svg       # フッター用ロゴ（暗い背景専用・SVG白文字）
        ├── ogp.png               # OGP・シェア用画像（1200×630px）
        ├── hero.png              # トップヒーロー画像
        ├── concept.png           # コンセプトヘッダー画像
        └── icons/                # SVGアイコン一式
```

## 記事ページの作り方

1. `article/template/index.html` をフォルダごとコピーする
2. フォルダ名はスラッグ（英数字・ハイフン）にする　例: `article/morning-routine/`
3. `<head>` 内の title / description / og / canonical を更新する
4. `data-phase` / `data-title` / `data-subtitle` / `data-back` を記事に合わせて更新する
5. 本文を書き換える
6. `sitemap.xml` に新しいURLを追記する

## お問い合わせフォームの設定

1. [Formspree](https://formspree.io/) でアカウントを作成する
2. 新しいフォームを作成してフォームIDを取得する
3. `contact/index.html` の `action="https://formspree.io/f/YOUR_FORM_ID"` を実際のIDに差し替える

## フォント方針

| 用途 | フォント |
|---|---|
| 見出し・タイトル | Noto Serif JP |
| 本文・UI | Noto Sans JP |

## カテゴリ構成

| カテゴリ | 内容 |
|---|---|
| Beauty | スキンケア・メイク・ヘアケア・ボディケア |
| Health | 食事・睡眠・運動・ストレスケア |
| Career | ワークスタイル・副業・スキルアップ |
| Interior | 整理収納・インテリアコーデ |
| Lifestyle | 趣味・旅行・お金地入れ |
| Time | 時間術・ルーティン化・タスク管理 |

## Phase進捗

- [x] Phase 1: OGP/SEO・404・sitemap・robots.txt
- [x] Phase 2: カテゴリページ（6ページ）
- [x] Phase 3: 記事テンプレート + article.css
- [x] Phase 4: アフィリエイト・デジタル商品・お問い合わせ
