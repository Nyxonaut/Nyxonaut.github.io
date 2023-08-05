var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

function nextSlide() {
  // Hide the current slide
  slides[currentSlide].style.display = 'block';
  
  // Calculate the index of the next slide
  currentSlide = (currentSlide + 1) % slides.length;
  
  // Show the next slide
  slides[currentSlide].style.display = 'block';
}

setInterval(nextSlide, 3000);
