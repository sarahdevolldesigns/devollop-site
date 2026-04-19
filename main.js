// Mobile nav toggle
function toggleNav() {
  const links = document.getElementById('navLinks');
  links.classList.toggle('open');
}

// Close nav on link click
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      document.getElementById('navLinks').classList.remove('open');
    });
  });
});
