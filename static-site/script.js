// ===== Inspired Technology Static Site JavaScript =====

document.addEventListener('DOMContentLoaded', () => {
  // ===== NAVBAR SCROLL =====
  const header = document.querySelector('header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // ===== MOBILE MENU =====
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileServicesBtn = document.getElementById('mobile-services-btn');
  const mobileServicesSub = document.getElementById('mobile-services-sub');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  if (mobileServicesBtn && mobileServicesSub) {
    mobileServicesBtn.addEventListener('click', () => {
      mobileServicesSub.classList.toggle('open');
      const arrow = mobileServicesBtn.querySelector('.mobile-arrow');
      if (arrow) arrow.classList.toggle('rotated');
    });
  }

  // ===== SERVICES DESKTOP DROPDOWN =====
  const servicesDropdown = document.getElementById('services-dropdown');
  const servicesDropdownMenu = document.getElementById('services-dropdown-menu');
  let dropdownTimeout;

  if (servicesDropdown && servicesDropdownMenu) {
    servicesDropdown.addEventListener('mouseenter', () => {
      clearTimeout(dropdownTimeout);
      servicesDropdownMenu.classList.add('open');
      const arrow = servicesDropdown.querySelector('.dropdown-arrow');
      if (arrow) arrow.classList.add('rotated');
    });

    servicesDropdown.addEventListener('mouseleave', () => {
      dropdownTimeout = setTimeout(() => {
        servicesDropdownMenu.classList.remove('open');
        const arrow = servicesDropdown.querySelector('.dropdown-arrow');
        if (arrow) arrow.classList.remove('rotated');
      }, 150);
    });
  }

  // ===== HERO SLIDER =====
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroContents = document.querySelectorAll('.hero-content');
  const heroCounter = document.getElementById('hero-counter-num');
  const heroProgress = document.getElementById('hero-progress');
  const heroPrev = document.getElementById('hero-prev');
  const heroNext = document.getElementById('hero-next');
  let heroIndex = 0;
  let heroTimer;

  function showHeroSlide(index) {
    heroSlides.forEach((s, i) => {
      s.style.opacity = i === index ? '1' : '0';
      s.style.transform = i === index ? 'scale(1)' : 'scale(1.05)';
    });
    heroContents.forEach((c, i) => {
      c.style.opacity = i === index ? '1' : '0';
      c.style.transform = i === index ? 'translateY(0)' : 'translateY(30px)';
    });
    if (heroCounter) heroCounter.textContent = String(index + 1).padStart(2, '0');
    if (heroProgress) heroProgress.style.height = ((index + 1) / heroSlides.length * 100) + '%';
    heroIndex = index;
  }

  function nextHeroSlide() {
    showHeroSlide((heroIndex + 1) % heroSlides.length);
  }

  function prevHeroSlide() {
    showHeroSlide((heroIndex - 1 + heroSlides.length) % heroSlides.length);
  }

  function startHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(nextHeroSlide, 6000);
  }

  if (heroSlides.length > 0) {
    showHeroSlide(0);
    startHeroTimer();

    if (heroPrev) heroPrev.addEventListener('click', () => { prevHeroSlide(); startHeroTimer(); });
    if (heroNext) heroNext.addEventListener('click', () => { nextHeroSlide(); startHeroTimer(); });
  }

  // ===== CASE STUDY SLIDER =====
  const csSlides = document.querySelectorAll('.cs-slide');
  const csButtons = document.querySelectorAll('.cs-btn');
  const csPrev = document.getElementById('cs-prev');
  const csNext = document.getElementById('cs-next');
  let csIndex = 0;
  let csTimer;

  function showCS(index) {
    csSlides.forEach((s, i) => {
      s.style.opacity = i === index ? '1' : '0';
      s.style.transform = i === index ? 'scale(1)' : 'scale(1.02)';
      s.style.position = i === index ? 'relative' : 'absolute';
      s.style.pointerEvents = i === index ? 'auto' : 'none';
    });
    csButtons.forEach((b, i) => {
      if (i === index) {
        b.classList.add('active');
        b.classList.remove('inactive');
      } else {
        b.classList.remove('active');
        b.classList.add('inactive');
      }
    });
    csIndex = index;
  }

  function nextCS() {
    showCS((csIndex + 1) % csSlides.length);
  }

  function prevCS() {
    showCS((csIndex - 1 + csSlides.length) % csSlides.length);
  }

  function startCSTimer() {
    clearInterval(csTimer);
    csTimer = setInterval(nextCS, 6000);
  }

  if (csSlides.length > 0) {
    showCS(0);
    startCSTimer();

    csButtons.forEach((btn, i) => {
      btn.addEventListener('click', () => { showCS(i); startCSTimer(); });
    });

    if (csPrev) csPrev.addEventListener('click', () => { prevCS(); startCSTimer(); });
    if (csNext) csNext.addEventListener('click', () => { nextCS(); startCSTimer(); });
  }

  // ===== ROTATING TEXT =====
  const rotatingWords = ['Software Development', 'Cloud Migration', 'AI Integration', 'Digital Transformation', 'Enterprise Platforms', 'Cybersecurity', 'Data Engineering', 'DevOps & SecOps'];
  const rotatingEl = document.getElementById('rotating-word');
  let rotIndex = 0;

  if (rotatingEl) {
    setInterval(() => {
      rotatingEl.style.opacity = '0';
      rotatingEl.style.transform = 'translateY(-100%)';
      setTimeout(() => {
        rotIndex = (rotIndex + 1) % rotatingWords.length;
        rotatingEl.textContent = rotatingWords[rotIndex];
        rotatingEl.style.transform = 'translateY(100%)';
        requestAnimationFrame(() => {
          rotatingEl.style.opacity = '1';
          rotatingEl.style.transform = 'translateY(0)';
        });
      }, 300);
    }, 2500);
  }

  // ===== FAQ ACCORDIONS =====
  document.querySelectorAll('.faq-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const arrow = toggle.querySelector('.faq-arrow');
      const isOpen = content.classList.contains('open');

      // Close all FAQ items in same container
      const container = toggle.closest('.faq-list') || toggle.closest('section');
      if (container) {
        container.querySelectorAll('.faq-content').forEach(c => c.classList.remove('open'));
        container.querySelectorAll('.faq-arrow').forEach(a => a.classList.remove('rotated'));
      }

      if (!isOpen) {
        content.classList.add('open');
        if (arrow) arrow.classList.add('rotated');
      }
    });
  });

  // ===== TAB SWITCHING =====
  document.querySelectorAll('.tab-group').forEach(group => {
    const tabs = group.querySelectorAll('.tab-btn');
    const panels = group.querySelectorAll('.tab-panel');

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        if (panels[i]) panels[i].classList.add('active');
      });
    });
  });

  // ===== SCROLL REVEAL (IntersectionObserver) =====
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== CONTACT FORM (mailto fallback) =====
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const phone = formData.get('phone') || '';
      const company = formData.get('company') || '';
      const service = formData.get('service') || '';
      const message = formData.get('message') || '';

      const subject = encodeURIComponent(`Project Inquiry from ${name} - ${service}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nService: ${service}\n\nMessage:\n${message}`);
      window.location.href = `mailto:contact@inspired.com.pk?subject=${subject}&body=${body}`;

      // Show success state
      const formEl = document.getElementById('contact-form-wrapper');
      const successEl = document.getElementById('contact-success');
      if (formEl) formEl.style.display = 'none';
      if (successEl) successEl.style.display = 'block';
    });
  }
});

// ===== SCROLL-BASED STYLES =====
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 40;
  document.querySelectorAll('.header-scrolled').forEach(el => {
    if (scrolled) {
      el.style.background = 'rgba(0,0,0,0.9)';
      el.style.backdropFilter = 'blur(24px)';
      el.style.borderBottomColor = 'rgba(42,42,42,0.6)';
      el.style.boxShadow = '0 1px 24px rgba(0,0,0,0.5)';
    } else {
      el.style.background = 'transparent';
      el.style.backdropFilter = 'none';
      el.style.borderBottomColor = 'transparent';
      el.style.boxShadow = 'none';
    }
  });
}, { passive: true });
