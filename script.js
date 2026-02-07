const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseenter", moveButton);
  noBtn.addEventListener("click", moveButton);
}

function moveButton() {
  const maxX = 200;
  const maxY = 120;

  const x = Math.random() * maxX - maxX / 2;
  const y = Math.random() * maxY - maxY / 2;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
// ======================
// SLIDESHOW SCRIPT
// ======================

let slideIndex = 0;
let slideTimer;

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");

  if (slides.length > 0) {
    showSlide(slideIndex);
    startAutoSlide();
  }
});

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");

  slides.forEach(slide => slide.classList.remove("active"));

  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  slides[slideIndex].classList.add("active");
}

function changeSlide(n) {
  clearInterval(slideTimer);   // stop auto when clicking
  slideIndex += n;
  showSlide(slideIndex);
  startAutoSlide();           // restart auto
}

function startAutoSlide() {
  slideTimer = setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
  }, 3000);
}
