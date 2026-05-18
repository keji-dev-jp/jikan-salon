/* ===========================
   jikan salon - 共通コンポーネント
   ヘッダー・フッターを全ページに自動挿入
=========================== */

(function () {
  // ルートパスを自動検出（階層に応じてパスを解決）
  const depth = (location.pathname.match(/\//g) || []).length - 1;
  const root = depth <= 1 ? './' : '../'.repeat(depth - 1);

  // ===== HEADER =====
  const headerEl = document.getElementById('site-header');
  if (headerEl) {
    const isTop = headerEl.dataset.type === 'top';
    if (isTop) {
      headerEl.innerHTML = `
        <header class="header">
          <div class="container">
            <a href="${root}index.html" class="header-logo">
              <img src="${root}assets/img/logo.png" alt="jikan salon" class="logo-img" />
            </a>
            <h1 class="site-title">30代女性の時間整理サロン</h1>
            <p class="site-subtitle">家事・仕事・プライベートを<br>スマートに整える30日プログラム</p>
          </div>
        </header>
      `;
    } else {
      const label = headerEl.dataset.label || '';
      const phase = headerEl.dataset.phase || '';
      const title = headerEl.dataset.title || '';
      const subtitle = headerEl.dataset.subtitle || '';
      const backHref = headerEl.dataset.back || `${root}index.html`;
      const backLabel = headerEl.dataset.backLabel || 'トップに戻る';
      headerEl.innerHTML = `
        <header class="header-sub">
          <div class="container">
            <a href="${backHref}" class="back-link">← ${backLabel}</a>
            ${phase ? `<p class="program-phase">${phase}</p>` : ''}
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
          <a href="${root}index.html" class="footer-logo">
            <img src="${root}assets/img/logo.png" alt="jikan salon" class="logo-img logo-img--footer" />
          </a>
          <nav class="footer-nav">
            <a href="${root}index.html">トップ</a>
            <a href="${root}concept/index.html">コンセプト</a>
            <a href="${root}program/1-7day/index.html">30日プログラム</a>
            <a href="${root}templates/index.html">テンプレート</a>
            <a href="${root}affiliate/index.html">おすすめアイテム</a>
            <a href="${root}shop/index.html">デジタル商品</a>
            <a href="${root}contact/index.html">お問い合わせ</a>
          </nav>
          <p class="footer-copy">&copy; 2026 jikan salon</p>
        </div>
      </footer>
    `;
  }
})();
