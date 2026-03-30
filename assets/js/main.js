// navbar-------------

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const backdrop = document.getElementById('backdrop');
const navbar = document.getElementById('navbar');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
let isOpen = false;

function openMenu() {
  isOpen = true;
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('flex');
  backdrop.classList.remove('hidden');
  bar1.style.transform = 'translateY(6px) rotate(45deg)';
  bar2.style.opacity = '0';
  bar3.style.transform = 'translateY(-6px) rotate(-45deg)';
  bar3.style.width = '24px';
  bar3.style.alignSelf = 'auto';
}

function closeMenu() {
  isOpen = false;
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
  backdrop.classList.add('hidden');
  bar1.style.transform = '';
  bar2.style.opacity = '1';
  bar3.style.transform = '';
  bar3.style.width = '16px';
  bar3.style.alignSelf = 'flex-end';
}

menuBtn.addEventListener('click', () => isOpen ? closeMenu() : openMenu());

// Scroll: glassmorphism on scroll
window.addEventListener('scroll', () => {
  navbar.classList.toggle('bg-black/60', window.scrollY > 20);
  navbar.classList.toggle('backdrop-blur-md', window.scrollY > 20);
  navbar.classList.toggle('border-b', window.scrollY > 20);
  navbar.classList.toggle('border-white/[0.06]', window.scrollY > 20);
});



// marqueee----------
(function () {
    const mwTrack = document.getElementById('mwMarqueeTrack');
    function mwPause()  { mwTrack.classList.add('mw-paused'); }
    function mwResume() { mwTrack.classList.remove('mw-paused'); }
    window.mwPause  = mwPause;
    window.mwResume = mwResume;
  })();


  // about me----------

  const cluster  = document.getElementById('cluster');
    const mainCard = document.getElementById('mainCard');

    mainCard.addEventListener('mouseenter', () => cluster.classList.add('cluster-open'));
    cluster.addEventListener('mouseleave',  () => cluster.classList.remove('cluster-open'));