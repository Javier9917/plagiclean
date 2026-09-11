const header = document.getElementById('header');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) header.classList.add('active');
  else header.classList.remove('active');
});

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});