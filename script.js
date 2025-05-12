// DOM Elements
const saveBtn = document.getElementById('save-btn');
const heroSelect = document.getElementById('hero-select');
const resultBox = document.getElementById('result');
const allHeroImages = document.querySelectorAll('.hero-img');

// Load saved preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedHero = localStorage.getItem('favoriteHero');
  if (savedHero) {
    resultBox.textContent = `Your favorite hero is: ${savedHero}`;
    displayHeroImage(savedHero);
  }
});

// Save button click handler
saveBtn.addEventListener('click', () => {
  const selectedHero = heroSelect.value;

  if (selectedHero) {
    // Save to localStorage
    localStorage.setItem('favoriteHero', selectedHero);
    resultBox.textContent = `Your favorite hero is: ${selectedHero}`;

    // Display the selected hero image with animation
    displayHeroImage(selectedHero);
  } else {
    resultBox.textContent = "Please select a hero first.";
  }
});

// Helper function to show selected image and hide others
function displayHeroImage(heroName) {
  allHeroImages.forEach(img => {
    if (img.id === heroName) {
      img.style.display = 'block';

      // Reset and trigger animation
      img.classList.remove('animate');
      void img.offsetWidth; 
      img.classList.add('animate');
    } else {
      img.style.display = 'none';
    }
  });
}
