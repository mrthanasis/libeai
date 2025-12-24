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

// Lightweight reveal + optional GSAP enhancement
function animateRevealWithGSAP(container) {
  if (!window.gsap || !container) return;
  const elements = container.querySelectorAll('h2, .section-badge-label, .service-item, .process-card, .benefit, .testimonial');
  if (!elements.length) return;
  window.gsap.fromTo(elements, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', stagger: 0.06 });
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      animateRevealWithGSAP(entry.target);
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Lazy-load GSAP only on first interaction to keep page light
let gsapRequested = false;
function ensureGSAP() {
  if (window.gsap && window.ScrollTrigger) return;
  if (gsapRequested) return;
  gsapRequested = true;
  const core = document.createElement('script');
  core.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
  core.defer = true;
  core.onload = () => {
    const st = document.createElement('script');
    st.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
    st.defer = true;
    st.onload = () => {
      if (window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        initWhatWeDoScroll();
        initBenefitsAlt();
        // Animate already visible sections + hero
        document.querySelectorAll('.reveal.in-view').forEach(animateRevealWithGSAP);
        animateRevealWithGSAP(document.getElementById('hero'));
      }
    };
    document.head.appendChild(st);
  };
  document.head.appendChild(core);
}

// Animated visual for Liberation Effect demo
function initBenefitsVisual(){
  if (!window.gsap || !window.ScrollTrigger) return;
  const section = document.getElementById('liberation-effect-visual');
  if (!section) return;
  const svg = section.querySelector('.benefits-svg');
  if (!svg) return;
  const nodes = svg.querySelectorAll('.bv-node');
  const cards = svg.querySelectorAll('.bv-card');
  const connectors = svg.querySelectorAll('.bv-connector');

  // Prepare connectors for draw animation
  connectors.forEach(line => {
    const length = Math.hypot(line.x2.baseVal.value - line.x1.baseVal.value, line.y2.baseVal.value - line.y1.baseVal.value);
    line.style.strokeDasharray = length;
    line.style.strokeDashoffset = length;
  });

  // Timeline tied to scroll
  const tl = window.gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top center',
      end: '+=100%',
      scrub: true
    }
  });

  tl.to(connectors, { strokeDashoffset: 0, duration: 1, stagger: 0.1, ease: 'none' }, 0);
  tl.fromTo(cards, { opacity: 0.4, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out', stagger: 0.08 }, 0.1);

  // Subtle float/pulse loop (independent of scroll)
  nodes.forEach((g, i) => {
    window.gsap.to(g, { y: '+=6', duration: 2.4 + i * 0.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
  });

  // Hover spotlight
  nodes.forEach(g => {
    g.addEventListener('mouseenter', () => {
      window.gsap.to(g.querySelector('.bv-card'), { boxShadow: '0 0 30px rgba(139,92,246,0.35)', duration: 0.3 });
    });
    g.addEventListener('mouseleave', () => {
      window.gsap.to(g.querySelector('.bv-card'), { boxShadow: '0 0 0 rgba(0,0,0,0)', duration: 0.3 });
    });
  });
}

// Alt horizontal scrollytelling for benefits
function initBenefitsAlt(){
  if (!window.gsap || !window.ScrollTrigger) return;
  const section = document.getElementById('liberation-effect');
  if (!section) return;
  const track = section.querySelector('.benefits-hscroll .htrack');
  if (!track) return;
  const panels = track.querySelectorAll('.hpanel');
  const total = panels.length;

  // baseline opacity for content
  window.gsap.set(panels, { opacity: 0.9 });

  // pin and translate X while scrolling
  function scrollLen(){
    return track.scrollWidth - section.clientWidth;
  }

  window.gsap.to(track, {
    x: () => -scrollLen(),
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      pin: true,
      start: 'top top',
      scrub: true,
      anticipatePin: 1,
      end: () => '+=' + scrollLen()
    }
  });

  // stroke draw tied to same scroll
  const allStrokes = Array.from(track.querySelectorAll('.hsvg path[stroke], .hsvg circle[stroke]'));
  allStrokes.forEach(el => {
    try {
      const length = el.getTotalLength?.();
      if (length) {
        el.style.strokeDasharray = length;
        el.style.strokeDashoffset = length;
      }
    } catch(e) {}
  });
  window.gsap.to(allStrokes, {
    strokeDashoffset: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => '+=' + section.clientWidth * (total - 1),
      scrub: true
    }
  });

  // gentle fade-in per panel for smoother edges
  panels.forEach((p, i) => {
    window.gsap.fromTo(p, { opacity: 0.6 }, { opacity: 1, ease: 'power1.out', scrollTrigger: {
      trigger: p,
      start: 'left center',
      end: 'right center',
      scrub: true
    }});
  });
}
window.addEventListener('scroll', ensureGSAP, { once: true, passive: true });
window.addEventListener('pointermove', ensureGSAP, { once: true });

// Word-by-word sticky scroll animation for "What We Do"
function initWhatWeDoScroll(){
  if (!window.gsap || !window.ScrollTrigger) return;
  const section = document.getElementById('what-we-do');
  if (!section) return;
  const textContainer = section.querySelector('.wwd-text');
  if (!textContainer) return;
  const titleEl = section.querySelector('.wwd-title');
  const introEl = section.querySelector('.wwd-intro');

  function splitWords(el){
    const nodes = [];
    el.childNodes.forEach(n => {
      if (n.nodeType === 3) { // text
        const words = n.textContent.trim().split(/(\s+)/);
        words.forEach(w => {
          if (w.trim().length === 0) {
            nodes.push(document.createTextNode(w));
          } else {
            const span = document.createElement('span');
            span.className = 'wwd-word';
            span.textContent = w;
            nodes.push(span);
          }
        });
      } else {
        nodes.push(n);
      }
    });
    el.innerHTML = '';
    nodes.forEach(n => el.appendChild(n));
    return el.querySelectorAll('.wwd-word');
  }

  const paragraphs = textContainer.querySelectorAll('p');
  const words = [];
  if (titleEl) {
    words.push(...splitWords(titleEl));
  }
  if (introEl) {
    words.push(...splitWords(introEl));
  }
  paragraphs.forEach(p => words.push(...splitWords(p)));

  window.gsap.set(words, { opacity: 0.12 });
  window.gsap.to(words, {
    opacity: 1,
    ease: 'none',
    stagger: { each: 0.05 },
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: '+=180%',
      pin: true,
      scrub: true
    }
  });
}

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

// Process visualization interactions
(function processInteractions(){
  const cards = document.querySelectorAll('.process-card');
  const stages = document.querySelectorAll('.process-stage');
  
  cards.forEach((card) => {
    const stepNumber = card.getAttribute('data-step');
    const stage = document.querySelector(`.process-stage[data-stage="${stepNumber}"]`);
    if (!stage) return;
    
    card.addEventListener('mouseenter', () => {
      stage.querySelectorAll('.process-node').forEach(node => {
        node.style.transform = 'scale(1.25)';
        node.style.opacity = '1';
      });
      card.style.transform = 'translateY(-6px)';
    });
    
    card.addEventListener('mouseleave', () => {
      stage.querySelectorAll('.process-node').forEach(node => {
        node.style.transform = '';
        node.style.opacity = '';
      });
      card.style.transform = '';
    });
  });
})();

// Testimonials Slider - Shows 3, moves 1 at a time
(function testimonialsSlider(){
  const track = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  if (!track || !prevBtn || !nextBtn) return;
  
  const testimonials = track.querySelectorAll('.testimonial');
  if (testimonials.length === 0) return;
  
  let currentIndex = 0;
  const itemsPerView = window.innerWidth > 1200 ? 3 : window.innerWidth > 768 ? 2 : 1;
  
  function updateSlider() {
    const itemWidth = testimonials[0].offsetWidth + 24; // gap included
    // Move by 1 item at a time, not by viewport
    const translateX = -currentIndex * itemWidth;
    track.style.transform = `translateX(${translateX}px)`;
    
    // Calculate max index based on moving 1 at a time
    const maxVisible = itemsPerView;
    const maxIndex = Math.max(0, testimonials.length - maxVisible);
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;
  }
  
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
  
  nextBtn.addEventListener('click', () => {
    const maxVisible = window.innerWidth > 1200 ? 3 : window.innerWidth > 768 ? 2 : 1;
    const maxIndex = Math.max(0, testimonials.length - maxVisible);
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });
  
  window.addEventListener('resize', () => {
    // Reset to start on resize
    currentIndex = 0;
    updateSlider();
  });
  
  updateSlider();
})();



