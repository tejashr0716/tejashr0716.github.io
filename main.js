/**
 * Studio Meridian Architectural Theme Controller
 * Portfolio of Tejas H R — Distributed Systems & Custom Software Engineering
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigationObserver();
  initProjectFilters();
  initClipboardHandlers();
  initBengaluruClock();
  initScrollEffects();
});

/**
 * Floating Navigation Intersection Observer
 * Updates active capsule item as the user scrolls through architectural sections
 */
function initNavigationObserver() {
  const sections = document.querySelectorAll('body#top, section[id], footer[id]');
  const navLinks = document.querySelectorAll('.floating-nav .nav-item');

  if (!navLinks.length) return;

  const sectionMap = {
    'top': document.getElementById('top'),
    'selected-work': document.getElementById('selected-work'),
    'philosophy': document.getElementById('philosophy'),
    'foundations': document.getElementById('foundations'),
    'contact': document.getElementById('contact'),
  };

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          const targetId = href ? href.replace('#', '') : '';
          if (targetId === id) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  }, observerOptions);

  Object.values(sectionMap).forEach((sec) => {
    if (sec) observer.observe(sec);
  });
}

/**
 * Filter project items by domain category
 */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') || 'all';

      // Update button active state
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter project cards
      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

/**
 * Clipboard Copy Handler for Contact Methods & Toast Notification
 */
function initClipboardHandlers() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast-notification');
  const email = 'tejashrise2026@gmail.com';
  let toastTimeout = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = email;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }
        showToast(`Copied to clipboard · ${email}`);
      } catch (err) {
        showToast(`Direct email: ${email}`);
      }
    });
  }
}

/**
 * Live Bengaluru IST Clock Formatter
 * Updates header location coordinates with dynamic live time
 */
function initBengaluruClock() {
  const badge = document.getElementById('header-location-badge');
  if (!badge) return;

  function updateClock() {
    const now = new Date();
    // Bengaluru is Asia/Kolkata (UTC + 5:30)
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const istTime = new Intl.DateTimeFormat('en-US', options).format(now);
    
    badge.innerHTML = `Bengaluru, IN · <span style="color: var(--white); font-weight: 500;">${istTime} IST</span><br /><span>12°58′ N · 77°35′ E</span>`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/**
 * Subtle parallax / scroll elevation effects
 */
function initScrollEffects() {
  const floatingNav = document.querySelector('.floating-nav');
  if (!floatingNav) return;

  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    if (currentY > 40) {
      floatingNav.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.45)';
    } else {
      floatingNav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.35)';
    }
    lastScrollY = currentY;
  }, { passive: true });
}
