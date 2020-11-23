document.querySelector('.header__nav-icon').addEventListener('click', () => {
  document.querySelector('.header').classList.toggle('header_active');
  document.querySelector('.header__nav-list').classList.toggle('header__nav-list_active');
})