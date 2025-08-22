// assets/theme.js — Light/Dark toggle with persistence
(function(){
  const KEY = 'site-theme';
  const html = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  function set(mode){
    if(mode){
      html.setAttribute('data-theme', mode);
      try{ localStorage.setItem(KEY, mode); }catch(e){}
    }
    if(icon){
      icon.innerHTML = mode === 'light'
        ? '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.03.05l-1.79 1.79 1.41 1.41 1.79-1.79-1.41-1.41zM12 6a6 6 0 100 12 6 6 0 000-12zm8 5v2h3v-2h-3zM4.22 18.36l1.79-1.79-1.41-1.41-1.79 1.79 1.41 1.41zM11 23h2v-3h-2v3zm7.66-3.64l1.79-1.79-1.41-1.41-1.79 1.79 1.41 1.41z"/></svg>'
        : '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>';
    }
  }
  const saved = (function(){ try{return localStorage.getItem(KEY)}catch(e){return null} })();
  if(saved === 'light' || saved === 'dark'){
    set(saved);
  } else {
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    set(prefersLight ? 'light' : 'dark');
  }
  if(btn){
    btn.addEventListener('click', function(){
      const current = html.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
      set(current === 'light' ? 'dark' : 'light');
    });
  }
})();