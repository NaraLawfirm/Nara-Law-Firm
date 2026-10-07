// =========================================================
// NARA WEBSITE — INTERACTION
// =========================================================

window.addEventListener('load',()=>{
 setTimeout(() => {
    const loader = document.getElementById('loader');

    if (loader) {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
    }
}, 1200);
});

// Animasi saat section masuk layar
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting)e.target.classList.add('visible')
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// Menu mobile
const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// =========================================================
// DATA KONTAK — diambil dari js/config.js
// Anda cukup mengedit config.js, tidak perlu mengubah HTML.
// =========================================================
if (typeof NARA_CONTACT !== 'undefined') {
  const phone = document.getElementById('contact-phone');
  const email = document.getElementById('contact-email');
  const address = document.getElementById('contact-address');
  const wa = document.getElementById('contact-whatsapp');

  if (phone) phone.textContent = NARA_CONTACT.phoneDisplay;
  if (email) email.textContent = NARA_CONTACT.email;
  if (address) address.textContent = NARA_CONTACT.address;
  if (wa && NARA_CONTACT.whatsapp) {
    wa.href = 'https://wa.me/' + NARA_CONTACT.whatsapp;
  }
}
