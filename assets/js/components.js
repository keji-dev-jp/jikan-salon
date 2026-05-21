/* ===========================
   jikan salon - 共通コンポーネント
   ルール:
   - サイト名「jikan salon」は常に太字表示
   - フッターロゴは logo-footer.svg を使用（filter依存禁止）
   - 資産変更時はREADMEも必ず更新
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
            <p class="site-name"><strong>jikan salon</strong></p>
            <p class="site-subtitle">時間を大切にする女性のためのライフスタイルメディア</p>
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
          <nav class="header-sub-nav">
            <div class="header-sub-nav-inner">
              <a href="${backHref}" class="back-link">← ${backLabel}</a>
              <a href="${ROOT}/index.html" class="header-sub-brand"><strong>jikan salon</strong></a>
              <span class="header-sub-nav-spacer"></span>
            </div>
          </nav>
          <div class="container">
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
            <img src="${ROOT}/assets/img/logo-footer.svg" alt="jikan salon" class="footer-logo-img" />
          </a>
          <nav class="footer-nav">
            <a href="${ROOT}/index.html">Topics</a>
            <a href="${ROOT}/concept/index.html">コンセプト</a>
            <a href="${ROOT}/category/beauty/index.html">Beauty</a>
            <a href="${ROOT}/category/health/index.html">Health</a>
            <a href="${ROOT}/category/career/index.html">Career</a>
            <a href="${ROOT}/category/interior/index.html">Interior</a>
            <a href="${ROOT}/category/lifestyle/index.html">Lifestyle</a>
            <a href="${ROOT}/category/time/index.html">Time</a>
          </nav>
          <p class="footer-copy">&copy; 2026 jikan salon</p>
        </div>
      </footer>
    `;
  }
})();
