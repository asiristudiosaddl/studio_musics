// Simple, safe mobile menu toggle.
// It toggles only the nav menu; it DOES NOT hide the header.
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');

  if (toggle && navList) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      navList.classList.toggle('show');
    });

    // Close menu if user taps anywhere outside the nav list
    document.addEventListener('click', function (ev) {
      if (!navList.contains(ev.target) && navList.classList.contains('show')) {
        navList.classList.remove('show');
      }
    });
  }
});
