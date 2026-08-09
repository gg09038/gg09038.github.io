(function () {
  const key = 'portfolio-theme';
  const saved = localStorage.getItem(key);
  if (saved) document.documentElement.dataset.theme = saved;

  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.addEventListener('click', function () {
      const current = document.documentElement.dataset.theme ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      localStorage.setItem(key, next);
    });
  }
})();
