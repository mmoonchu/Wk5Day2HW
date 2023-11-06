const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg');