// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
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
// 3.0
menuLinks.forEach((link) => {
    let linkVar = document.createElement('a');
    linkVar.setAttribute('href', `${link.href}`);
    linkVar.textContent = `${link.text}`;
    topMenuEl.append(linkVar);
})

// 4.0
const subMenuEl = document.querySelector('#sub-menu');
// 4.1
subMenuEl.style.height = '100%';
// 4.2
subMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg');
// 4.3
subMenuEl.classList.add('flex-around');
// 4.4
subMenuEl.style.position = 'absolute';
// 4.5
subMenuEl.style.top = '0';
// 5.1
const topMenuLinks = topMenuEl.querySelectorAll('a');
const showingSubMenu = false;
// 5.2
topMenuEl.addEventListener('click', (e) => {
  e.preventDefault();
  if (![...document.querySelectorAll('a')].includes(e.target)) {
    return;
  }
  console.log(e.target);
  // 5.3
  if (e.target.classList.contains('active')) {
    e.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }
  // 5.4
  [...topMenuLinks.querySelectorAll('a')].forEach((a) => {
    a.classList.remove('active');
  })
  // 5.5
  e.target.classList.add('active');
  // 5.6
  if (e.target.)
})