// Add interactivity to buttons
document.querySelectorAll('.interactive-button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you for your interest! We will contact you soon.');
  });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Your message has been sent!');
  e.target.reset();
});