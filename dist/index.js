// Fixed Navbar
window.onscroll = () => {
  const header = document.querySelector('.header');

  header.classList.toggle('fixed', window.scrollY > 100);
};
