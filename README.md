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

## サイト構成

```
jikan-salon/
├── index.html                    # トップページ
├── concept/index.html            # コンセプト
├── category/
│   ├── beauty/index.html           # 美容・スキンケア
│   ├── health/index.html           # 健康・ウェルネス
│   ├── career/index.html           # キャリア・ワーク
│   ├── interior/index.html         # インテリア・整理收納
│   ├── lifestyle/index.html        # ライフスタイル
│   └── time/index.html             # 時間術・干し方改善
├── affiliate/index.html          # おすすめアイテム
├── shop/index.html               # デジタル商品
├── contact/index.html            # お問い合わせ
├── 404.html                      # 404ページ
├── sitemap.xml                   # SEOサイトマップ
├── robots.txt                    # クローラー設定
└── assets/
    ├── css/style.css               # 全体スタイル（共通）
    ├── js/components.js           # ヘッダー・フッター共通コンポーネント
    └── img/
        ├── logo.png                # ヘッダー用ロゴ（明るい背景向け）
        ├── logo-footer.svg         # フッター用ロゴ（暗い背景専用・SVG白文字）
        ├── ogp.png                 # OGP・シェア用画像（1200×630px）
        ├── hero.png                # トップヒーロー画像
        ├── concept.png             # コンセプトヘッダー画像
        └── icons/                  # SVGアイコン一式
```

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
| Interior | 整理收納・インテリアコーデ |
| Lifestyle | 趣味・旅行・お金地入れ |
| Time | 時間術・ルーティン化・タスク管理 |

## Phase進捗

- [x] Phase 1: OGP/SEO・404・sitemap・robots.txt
- [x] Phase 2: カテゴリページ（6ページ）
- [ ] Phase 3: 記事テンプレート
- [ ] Phase 4: アフィリエイト・デジタル商品・お問い合わせ
