// 1.0
const mainEl = document.querySelector('main');
// 1.1
mainEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg');
// 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
// 1.3
mainEl.classList.add('flex-ctr');
// 2.0
