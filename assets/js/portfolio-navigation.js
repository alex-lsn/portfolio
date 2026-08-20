(() => {
  const scrollKey = 'portfolio-scroll-position';
  const casePages = [
    '/youmin/index.html',
    '/sleeptery/index.html',
    '/hoop/index.html',
    '/transatlantic/index.html',
    '/kulman/index.html',
    '/nlmk/index.html',
    '/aeroflot/index.html',
    '/goodstay/index.html'
  ];

  const saveScrollPosition = () => {
    sessionStorage.setItem(scrollKey, String(window.scrollY));
  };

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || link.target === '_blank' || event.defaultPrevented) return;

    const destination = new URL(link.href, window.location.href);
    const isCasePage = casePages.some(path => destination.pathname.endsWith(path));
    if (destination.origin === window.location.origin && isCasePage) {
      saveScrollPosition();
    }
  });

  window.savePortfolioScrollPosition = saveScrollPosition;

  const shouldRestore = new URLSearchParams(window.location.search).has('restore-scroll');
  const savedPosition = shouldRestore ? sessionStorage.getItem(scrollKey) : null;
  if (savedPosition === null) return;

  sessionStorage.removeItem(scrollKey);
  history.replaceState(null, '', window.location.pathname + window.location.hash);
  const top = Number(savedPosition);
  if (!Number.isFinite(top)) return;

  const restoreScrollPosition = () => {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, top);
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
  };

  requestAnimationFrame(restoreScrollPosition);
  window.addEventListener('load', restoreScrollPosition, { once: true });
})();
