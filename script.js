// 1.0
const mainEl = document.querySelector('main');
// 1.1
mainEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg');
// 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
// 1.3
mainEl.classList.add('flex-ctr');
// 2.0
const topMenuEl = document.querySelector('#top-menu');
// 2.1
topMenuEl.style.height = '100%';
// 2.2
topMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg');
// 2.3
topMenuEl.classList.add('flex-around');