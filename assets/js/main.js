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
  function mwPause() { mwTrack.classList.add('mw-paused'); }
  function mwResume() { mwTrack.classList.remove('mw-paused'); }
  window.mwPause = mwPause;
  window.mwResume = mwResume;
})();


// about me----------

const cluster = document.getElementById('cluster');
const mainCard = document.getElementById('mainCard');

mainCard.addEventListener('mouseenter', () => cluster.classList.add('cluster-open'));
cluster.addEventListener('mouseleave', () => cluster.classList.remove('cluster-open'));




// ── Drift directions for each index (normalized vectors × pixel distance) ──
// Each element drifts in a unique direction, returns back, loops
const driftVectors = [
  { x: -22, y: -18 },  // 0 — top-left
  { x: 20, y: -22 },  // 1 — top-right
  { x: 26, y: 14 },  // 2 — right-down
  { x: -18, y: 20 },  // 3 — bottom-left
  { x: 16, y: -24 },  // 4 — up-right
  { x: 16, y: 24 },  // 5 — up-right
  { x: -16, y: 34 },  // 6 — up-right
  { x: 20, y: 24 },  // 7 — up-right
];

// Stagger delays so they don't all move in sync (ms)
const staggerDelays = [0, 650, 1300, 300, 950, 1600, 500, 1100];

// Duration at "away" position before returning (ms)
const pauseAway = 1800;

// Duration at "home" position before drifting (ms)
const pauseHome = 1000;

function startDrift(el, drift, delay) {
  function goAway() {
    el.style.transform = `translate(${drift.x}px, ${drift.y}px)`;
    setTimeout(goHome, pauseAway);
  }
  function goHome() {
    el.style.transform = 'translate(0px, 0px)';
    setTimeout(goAway, pauseHome);
  }
  // Start after stagger delay
  setTimeout(goAway, delay);
}

// ── Wire up pill groups ──
for (let i = 0; i < 5; i++) {
  const el = document.getElementById('pg' + i);
  startDrift(el, driftVectors[i], staggerDelays[i]);
}

// ── Wire up icon groups ──
for (let i = 0; i < 8; i++) {
  const el = document.getElementById('ig' + i);
  startDrift(el, driftVectors[i], staggerDelays[i]);
}