// Smooth scroll for anchor links
document.addEventListener('click', function(e){
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  if (id.length > 1) {
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
});

// Intersection Observer reveal animations
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// CTA click tracking with GA4
function trackCTA(label) {
  if (typeof gtag === 'function') {
    gtag('event', 'click', { 'event_category': 'CTA', 'event_label': label });
  }
}
document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('click', () => trackCTA(btn.getAttribute('aria-label') || btn.textContent.trim()))
});

// Update year
document.getElementById('year').textContent = new Date().getFullYear();

// Subtle particle background (performance-friendly)
(function initParticles(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let w, h, dpr;
  const particles = [];
  const COUNT = Math.min(80, Math.floor(window.innerWidth / 20));

  function resize(){
    dpr = Math.max(1, window.devicePixelRatio || 1);
    w = canvas.width = Math.floor(window.innerWidth * dpr);
    h = canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i=0;i<COUNT;i++){
    particles.push({
      x: Math.random()*w,
      y: Math.random()*h,
      vx: (Math.random()-0.5)*0.05*dpr,
      vy: (Math.random()-0.5)*0.05*dpr,
      r: Math.random()*1.2*dpr + 0.4*dpr,
      a: Math.random()*0.5 + 0.2
    });
  }

  function step(){
    ctx.clearRect(0,0,w,h);
    for (const p of particles){
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r*3);
      g.addColorStop(0, 'rgba(139, 92, 246,'+p.a+')');
      g.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r*3, 0, Math.PI*2);
      ctx.fill();
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
})();

// FAQ detail open/close analytics
document.querySelectorAll('#faq details').forEach(d => {
  d.addEventListener('toggle', () => {
    if (d.open && typeof gtag === 'function') {
      const q = d.querySelector('summary span')?.textContent || 'FAQ';
      gtag('event', 'expand', { 'event_category': 'FAQ', 'event_label': q });
    }
  });
});

// Magnetic hover for buttons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width/2);
    const y = e.clientY - (r.top + r.height/2);
    btn.style.transform = `translate(${x*0.05}px, ${y*0.05}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

// Tilt interaction for cards
document.querySelectorAll('.feature, .benefit, .plan').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -4;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 4;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// Staggered reveal via data-delay
document.querySelectorAll('[data-delay]').forEach(el => {
  el.style.transitionDelay = `${parseFloat(el.getAttribute('data-delay')) || 0}s`;
});

// Hero mock parallax
(function heroParallax(){
  const hero = document.getElementById('hero');
  const mock = hero?.querySelector('.mock');
  if (!hero || !mock) return;
  hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    mock.style.transform = `perspective(1200px) rotateY(${x*6-8}deg) rotateX(${-(y*4-2)}deg)`;
  });
  hero.addEventListener('mouseleave', () => {
    mock.style.transform = 'perspective(1200px) rotateY(-8deg) rotateX(2deg)';
  });
})();

// Cursor halo for visibility
(function cursorHalo(){
  const halo = document.getElementById('cursor-halo');
  if (!halo) return;
  const show = () => halo.style.opacity = '1';
  const hide = () => halo.style.opacity = '0';
  document.addEventListener('mousemove', (e) => {
    halo.style.left = e.clientX + 'px';
    halo.style.top = e.clientY + 'px';
    show();
  });
  document.addEventListener('mouseleave', hide);
})();



