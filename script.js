document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.getElementsByTagName('a');
  for (let link of mobileLinks) {
      link.addEventListener('click', function() {
          mobileMenu.classList.add('hidden');
      });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });

  // Contact form modal functionality
  const modal = document.getElementById('contactModal');
  const closeModal = document.getElementById('closeModal');
  const contactButtons = document.querySelectorAll('button:not(#mobile-menu-button):not(#closeModal)');
  const contactForm = document.getElementById('contactForm');

  // Open modal when any contact button is clicked
  contactButtons.forEach(button => {
      if (button.textContent.trim().toLowerCase().includes('contact')) {
          button.addEventListener('click', () => {
              modal.classList.add('show');
          });
      }
  });

  // Close modal when clicking the close button
  closeModal.addEventListener('click', () => {
      modal.classList.remove('show');
  });

  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.classList.remove('show');
      }
  });

  // Handle form submission
  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Here you would typically send the form data to your server
      const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value
      };
      console.log('Form submitted:', formData);
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      
      // Clear form and close modal
      contactForm.reset();
      modal.classList.remove('show');
  });
});