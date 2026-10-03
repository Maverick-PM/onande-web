/**
 * ON & E Master Client Interaction Script
 * Brand: IDEAS | SYSTEMS | PROGRESS
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const toggleBtn = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
      toggleBtn.innerHTML = isOpen
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
    });
  }

  // Contact Form Handling (Contact Page)
  const contactForm = document.getElementById('contact-form');
  const feedbackMsg = document.getElementById('form-feedback');

  if (contactForm && feedbackMsg) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      feedbackMsg.style.display = 'block';
      feedbackMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      const name = document.getElementById('form-name')?.value || '';
      const email = document.getElementById('form-email')?.value || '';
      const company = document.getElementById('form-company')?.value || '';
      const subject = document.getElementById('form-subject')?.value || 'General Technical Enquiry';
      const message = document.getElementById('form-message')?.value || '';

      const mailtoUrl = `mailto:info@onande.com?subject=${encodeURIComponent('[ON & E Enquiry] ' + subject + ' - ' + company)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\nCompany: ' + company + '\n\n' + message)}`;

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 1200);
    });
  }
});
