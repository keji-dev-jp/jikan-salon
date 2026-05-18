/* ===========================
   jikan salon - 共通コンポーネント
   ヘッダー・フッターを全ページに自動挿入
=========================== */

(function () {
  const ROOT = '/jikan-salon';

  // ===== HEADER =====
  const headerEl = document.getElementById('site-header');
  if (headerEl) {
    const isTop = headerEl.dataset.type === 'top';

    if (isTop) {
      headerEl.innerHTML = `
        <header class="header">
          <div class="container">
            <a href="${ROOT}/index.html" class="header-logo">
              <img src="${ROOT}/assets/img/logo.png" alt="jikan salon" class="logo-img" />
            </a>
            <h1 class="site-title">jikan salon</h1>
            <p class="site-subtitle">毎日を、少しずつ整える。<br>自分のための時間をつくる30日プログラム</p>
          </div>
        </header>
      `;
    } else {
      const phase     = headerEl.dataset.phase     || '';
      const title     = headerEl.dataset.title     || '';
      const subtitle  = headerEl.dataset.subtitle  || '';
      const backHref  = headerEl.dataset.back      || `${ROOT}/index.html`;
      const backLabel = headerEl.dataset.backLabel || 'トップに戻る';

      headerEl.innerHTML = `
        <header class="header-sub">
          <div class="container">
            <a href="${backHref}" class="back-link">← ${backLabel}</a>
            ${phase    ? `<p class="program-phase">${phase}</p>`     : ''}
            <h1 class="page-title">${title}</h1>
            ${subtitle ? `<p class="page-subtitle">${subtitle}</p>` : ''}
          </div>
        </header>
      `;
    }
  }

  // ===== FOOTER =====
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.innerHTML = `
      <footer class="footer">
        <div class="container">
          <a href="${ROOT}/index.html" class="footer-logo">
            <img src="${ROOT}/assets/img/logo.png" alt="jikan salon" class="logo-img logo-img--footer" />
          </a>
          <nav class="footer-nav">
            <a href="${ROOT}/index.html">トップ</a>
            <a href="${ROOT}/concept/index.html">コンセプト</a>
            <a href="${ROOT}/program/1-7day/index.html">30日プログラム</a>
            <a href="${ROOT}/templates/index.html">テンプレート</a>
            <a href="${ROOT}/affiliate/index.html">おすすめアイテム</a>
            <a href="${ROOT}/shop/index.html">デジタル商品</a>
            <a href="${ROOT}/contact/index.html">お問い合わせ</a>
          </nav>
          <p class="footer-copy">&copy; 2026 jikan salon</p>
        </div>
      </footer>
    `;
  }
})();
