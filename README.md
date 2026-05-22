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
        └── article/        # 記事サムネイル画像（スラッグ名.png / .webp）
```

---

## 🏷️ 命名規則

| 種別 | 命名ルール | 例 |
|---|---|---|
| 記事フォルダ | `{カテゴリー}-{内容}-{キーワード}` | `beauty-skincare-5min` |
| 記事サムネイル | `{記事スラッグ}.png` / `.webp` | `beauty-skincare-5min.png` |
| カテゴリー画像 | `{カテゴリー名小文字}.png` | `beauty.png` |
| CSSファイル | `{用途}.css` | `article.css` |

---

## ✅ 記事追加チェックリスト

新しい記事を追加する際は以下を確認してください：

- [ ] `article/{スラッグ}/index.html` を作成
- [ ] `assets/img/article/{スラッグ}.png` と `.webp` をアップロード
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
| 2026-05-22 | README 今後の予定・更新履歴を現状に合わせて更新 |
| 2026-05-19 | Google Search Console認証ファイル追加（`google772f766b9ffa7ca0.html`） |
| 2026-05-19 | 記事サムネイル画像アップロード（PNG＋WebP、全カテゴリー2本ずつ計12本超） |
| 2026-05-19 | 記事6本追加（Beauty/Health/Career/Interior/Lifestyle/Time） |
| 2026-05-19 | プライバシーポリシー・運営者情報ページ追加 |
| 2026-05-19 | assets/img/article/ フォルダ作成 |
| 2026-05-19 | README・sitemap更新、ドキュメント整備 |

---

## 🚀 今後の予定

### ✅ 対応済み
- [x] 各記事サムネイル画像のアップロード（PNG＋WebP 対応済み）
- [x] Google Search Console 認証ファイル設置

### 🔲 未対応
- [ ] 独自ドメイン取得 → Google AdSense申請
  - AdSense申請の目安：各カテゴリー2〜3本以上（合計12〜18本程度）
  - 独自ドメイン設定後は `sitemap.xml`・`robots.txt` のURL更新も必要
- [ ] OGP画像パスの確認・差し替え（各記事のHTMLを個別確認）
- [ ] カテゴリーページへの記事カード追加（6カテゴリー × 現行記事分）
- [ ] sitemap.xml の定期更新
- [ ] 記事の追加（各カテゴリー2本目以降）
