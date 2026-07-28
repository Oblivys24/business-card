const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
header.classList.toggle('scrolled', window.scrollY > 40);
});

const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
menuToggle.addEventListener('click', () => {
const isOpen = siteNav.classList.toggle('is-open');
menuToggle.classList.toggle('is-open', isOpen);
menuToggle.setAttribute('aria-expanded', isOpen);
document.body.style.overflow = isOpen ? 'hidden' : '';
});
siteNav.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
});
});

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if(entry.isIntersecting){
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
    }
});
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));