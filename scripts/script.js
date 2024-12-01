// Cacher le menu au scroll
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    header.style.transform = 'translateY(-100%)'; // Cache le menu
  } else {
    header.style.transform = 'translateY(0)'; // Réaffiche le menu
  }
  lastScroll = currentScroll;
});

// Faire apparaître la section contact avec une animation
const contactSection = document.querySelector('#contact');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      contactSection.classList.add('visible');
    }
  });
});

observer.observe(contactSection);

// Animation pour les photos
const aboutPhotos = document.querySelectorAll('.about-photos img');

const photosObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Ajoute la classe visible
    }
  });
});

// Observe chaque photo individuellement
aboutPhotos.forEach((photo) => {
  photosObserver.observe(photo);
});

