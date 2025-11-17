// === Video Slider ===
const slides = document.querySelectorAll('.video-slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Change every 6 seconds (adjust as you like)
setInterval(nextSlide, 6000);
