// Toggle Navigation Menu for Mobile
function toggleNav() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
}

// Toggle Form Popup
function toggleFormPopup() {
  const popup = document.querySelector('.form-popup');
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

// Scroll Mentor Cards
function scrollMentors(direction) {
  const container = document.querySelector('.mentor-cards .card-grid');
  const scrollAmount = 220; // Width of card + gap
  container.scrollLeft += direction * scrollAmount;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  navToggle.addEventListener('click', toggleNav);

  document.querySelectorAll('.btn-form').forEach(btn => {
    btn.addEventListener('click', toggleFormPopup);
  });

  const scrollLeft = document.querySelector('.scroll-arrow.left');
  const scrollRight = document.querySelector('.scroll-arrow.right');
  if (scrollLeft && scrollRight) {
    scrollLeft.addEventListener('click', () => scrollMentors(-1));
    scrollRight.addEventListener('click', () => scrollMentors(1));
  }
});