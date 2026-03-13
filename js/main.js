/* =========================================
   MapleSensors – Main JavaScript
   ========================================= */

/* ── Navbar ── */
const navbar    = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav-menu');
const navLinks  = document.querySelectorAll('.nav-link:not(.nav-cta)');

// Scroll state
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  backToTop.classList.toggle('show', window.scrollY > 400);
});

// Mobile menu
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
  document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('active');
    navMenu?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Active nav link
function setActiveLink() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    const isActive = href === path || (path === '' && href === 'index.html') ||
                     (href.split('/').pop() === path);
    link.classList.toggle('active', isActive);
  });
}
setActiveLink();

/* ── Back to Top ── */
const backToTop = document.querySelector('.back-to-top');
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── Scroll Fade-In Animations ── */
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => observer.observe(el));

/* ── Animated Counter ── */
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const step = 16;
  const increment = target / (duration / step);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    const display = Number.isInteger(target) ? Math.round(current) : current.toFixed(1);
    el.textContent = display + suffix;
  }, step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-counter]').forEach(el => counterObserver.observe(el));

/* ── Product / Blog Filter ── */
function initFilter(filterSelector, cardSelector) {
  const filterBtns = document.querySelectorAll(filterSelector);
  const cards      = document.querySelectorAll(cardSelector);
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.filter;

      cards.forEach(card => {
        const match = cat === 'all' || card.dataset.category === cat;
        card.style.display = match ? '' : 'none';

        if (match) {
          card.style.animation = 'fadeIn .35s ease forwards';
        }
      });
    });
  });
}

initFilter('.filter-btn', '.product-card');
initFilter('.blog-filter-btn', '.blog-card');

/* ── Contact Form Validation ── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    // Clear previous errors
    this.querySelectorAll('.form-control').forEach(field => {
      field.classList.remove('error');
      const err = field.nextElementSibling;
      if (err?.classList.contains('form-error')) err.classList.remove('show');
    });

    // Validate required fields
    this.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        showFieldError(field, 'This field is required.');
        valid = false;
      }
    });

    // Validate email
    const emailField = this.querySelector('#email');
    if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      showFieldError(emailField, 'Please enter a valid email address.');
      valid = false;
    }

    if (valid) {
      const successMsg = document.querySelector('.form-success');
      successMsg?.classList.add('show');
      contactForm.reset();
      setTimeout(() => successMsg?.classList.remove('show'), 5000);
    }
  });
}

function showFieldError(field, message) {
  field.classList.add('error');
  let err = field.nextElementSibling;
  if (!err || !err.classList.contains('form-error')) {
    err = document.createElement('span');
    err.className = 'form-error';
    field.after(err);
  }
  err.textContent = message;
  err.classList.add('show');
}

/* ── Smooth internal anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Product Search ── */
const searchInput = document.getElementById('productSearch');
if (searchInput) {
  searchInput.addEventListener('input', function () {
    const term = this.value.toLowerCase().trim();
    document.querySelectorAll('.product-card').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(term) ? '' : 'none';
    });
  });
}

/* ── Testimonial auto-scroll (for mobile) ── */
// placeholder for future carousel enhancement

/* ── Utility: CSS keyframe injection ── */
const styleSheet = document.styleSheets[0];
try {
  styleSheet.insertRule('@keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }', styleSheet.cssRules.length);
} catch (_) {}
