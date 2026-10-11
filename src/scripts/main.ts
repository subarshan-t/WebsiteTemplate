import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Smooth scrolling, synced with ScrollTrigger
let lenis: Lenis | null = null;
if (!reduceMotion) {
  lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

// Theme toggle
document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {}
  });
});

// Mobile / fullscreen menu
const menu = document.querySelector<HTMLElement>('[data-menu]');
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
if (menu && menuBtn) {
  const links = menu.querySelectorAll('[data-menu-link]');
  const tl = gsap
    .timeline({ paused: true })
    .set(menu, { visibility: 'visible' })
    .fromTo(menu, { clipPath: 'circle(0% at 100% 0%)' }, { clipPath: 'circle(150% at 100% 0%)', duration: 0.8, ease: 'power3.inOut' })
    .from(links, { yPercent: 110, stagger: 0.06, duration: 0.6, ease: 'power3.out' }, '-=0.35');

  const setOpen = (open: boolean) => {
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    if (open) {
      lenis?.stop();
      tl.timeScale(1).play();
    } else {
      lenis?.start();
      tl.timeScale(1.6).reverse();
    }
  };
  menuBtn.addEventListener('click', () => setOpen(menuBtn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') setOpen(false);
  });
}

// Header hides on scroll down, shows on scroll up
const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
  let last = 0;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 40);
    header.classList.toggle('is-hidden', y > last && y > 300 && !document.body.classList.contains('menu-open'));
    last = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Wrap each line of [data-split] headings for a masked line reveal.
// Lines are authored with <br> so the split is deterministic.
document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
  const lines = el.innerHTML.split(/<br\s*\/?>/i);
  el.innerHTML = lines.map((l) => `<span class="split-line"><span>${l.trim()}</span></span>`).join('');
});

function intro() {
  // Hero / split headings
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    gsap.to(el.querySelectorAll('.split-line > span'), {
      yPercent: 0,
      y: 0,
      duration: 1.1,
      stagger: 0.1,
      ease: 'power4.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
  });

  // Generic fade-up reveals
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      delay: Number(el.dataset.delay || 0),
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
  });

  // Parallax media
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const amount = Number(el.dataset.parallax || 15);
    gsap.fromTo(
      el,
      { yPercent: -amount },
      { yPercent: amount, ease: 'none', scrollTrigger: { trigger: el.parentElement, scrub: true } },
    );
  });

  // Counters
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
      onUpdate: () => (el.textContent = Math.round(obj.v).toString()),
    });
  });

  // Horizontal scroll section (desktop only)
  const mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', () => {
    gsap.utils.toArray<HTMLElement>('[data-hscroll]').forEach((wrap) => {
      const track = wrap.querySelector<HTMLElement>('[data-hscroll-track]');
      if (!track) return;
      const distance = () => track.scrollWidth - wrap.clientWidth;
      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });
  });
}

// Custom cursor
const cursor = document.querySelector<HTMLElement>('.cursor');
if (cursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3' });
  window.addEventListener('mousemove', (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });
  document.addEventListener('mouseover', (e) => {
    const t = e.target as HTMLElement;
    const view = t.closest<HTMLElement>('[data-cursor]');
    cursor.classList.toggle('is-view', !!view);
    cursor.textContent = view?.dataset.cursor ?? '';
    cursor.classList.toggle('is-hover', !view && !!t.closest('a, button'));
  });
}

// Magnetic buttons
document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect();
    gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.4 });
  });
  el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' }));
});

// Preloader, shown once per session
const preloader = document.querySelector<HTMLElement>('.preloader');
let seen = false;
try {
  seen = sessionStorage.getItem('preloaded') === '1';
  sessionStorage.setItem('preloaded', '1');
} catch {}

if (preloader && !seen && !reduceMotion) {
  gsap
    .timeline({ onComplete: () => (preloader.remove(), intro()) })
    .from(preloader.querySelector('span'), { yPercent: 100, opacity: 0, duration: 0.7, ease: 'power3.out' })
    .to(preloader, { yPercent: -100, duration: 0.9, ease: 'power4.inOut', delay: 0.4 });
} else {
  preloader?.remove();
  intro();
}
