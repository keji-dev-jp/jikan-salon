# jikan salon

> 女性の毎日を豊かにする、ライフスタイル情報メディア

**URL:** https://keji-dev-jp.github.io/jikan-salon/

---

## 📁 フォルダ構成

```
jikan-salon/
├── index.html              # トップページ
├── sitemap.xml             # SEO用サイトマップ
├── robots.txt              # クローラー設定
├── 404.html                # 404エラーページ
├── README.md               # このファイル（設計書）
│
├── about/                  # 運営者情報ページ
├── privacy/                # プライバシーポリシーページ
├── concept/                # コンセプトページ
├── contact/                # お問い合わせページ
│
├── category/               # カテゴリー一覧ページ（6カテゴリー）
│   ├── beauty/
│   ├── health/
│   ├── career/
│   ├── interior/
│   ├── lifestyle/
│   └── time/
│
├── article/                # 記事ページ（スラッグ名でフォルダ管理）
│   ├── beauty-skincare-5min/
│   ├── health-sleep-habits/
│   ├── career-wfh-focus/
│   ├── interior-storage-tips/
│   ├── lifestyle-kakeibo/
│   └── time-morning-routine/
│
├── affiliate/              # アフィリエイト紹介ページ
├── program/                # プログラム・特集ページ
│   └── 1-7day/
├── shop/                   # ショップ・商品紹介ページ
│
└── assets/                 # 静的アセット
    ├── css/
    │   ├── style.css       # 共通スタイル
    │   └── article.css     # 記事ページ用スタイル
    ├── js/
    │   └── components.js   # ヘッダー・フッター共通コンポーネント
    └── img/
        ├── topics/         # カテゴリーサムネイル画像
        └── article/        # 記事サムネイル画像（スラッグ名.png）
```

---

## 🏷️ 命名規則

| 種別 | 命名ルール | 例 |
|---|---|---|
| 記事フォルダ | `{カテゴリー}-{内容}-{キーワード}` | `beauty-skincare-5min` |
| 記事サムネイル | `{記事スラッグ}.png` | `beauty-skincare-5min.png` |
| カテゴリー画像 | `{カテゴリー名小文字}.png` | `beauty.png` |
| CSSファイル | `{用途}.css` | `article.css` |

---

## ✅ 記事追加チェックリスト

新しい記事を追加する際は以下を確認してください：

- [ ] `article/{スラッグ}/index.html` を作成
- [ ] `assets/img/article/{スラッグ}.png` をアップロード
- [ ] 記事HTML内のOGP画像パスを正しく設定
- [ ] `sitemap.xml` に新URLを追記・`lastmod` を更新
- [ ] カテゴリーページ（`category/{カテゴリー}/index.html`）に記事カードを追加
- [ ] トップページ（`index.html`）のトピックスセクションを更新（必要に応じて）

---

## 📄 主要ページ一覧

| ページ | URL | 備考 |
|---|---|---|
| トップ | `/` | |
| コンセプト | `/concept/` | |
| カテゴリー（Beauty） | `/category/beauty/` | |
| カテゴリー（Health） | `/category/health/` | |
| カテゴリー（Career） | `/category/career/` | |
| カテゴリー（Interior） | `/category/interior/` | |
| カテゴリー（Lifestyle） | `/category/lifestyle/` | |
| カテゴリー（Time） | `/category/time/` | |
| アフィリエイト | `/affiliate/` | |
| お問い合わせ | `/contact/` | |
| 運営者情報 | `/about/` | AdSense審査用 |
| プライバシーポリシー | `/privacy/` | AdSense審査用 |

---

## 🗓️ 更新履歴

| 日付 | 内容 |
|---|---|
| 2026-05-19 | 記事6本追加（Beauty/Health/Career/Interior/Lifestyle/Time） |
| 2026-05-19 | プライバシーポリシー・運営者情報ページ追加 |
| 2026-05-19 | assets/img/article/ フォルダ作成 |
| 2026-05-19 | README・sitemap更新、ドキュメント整備 |

---

## 🚀 今後の予定

- [ ] 独自ドメイン取得 → Google AdSense申請
- [ ] 各記事サムネイル画像のアップロード・OGP差し替え
- [ ] カテゴリーページへの記事カード追加
- [ ] sitemap.xml の定期更新
- [ ] 記事の追加（各カテゴリー2本目以降）
