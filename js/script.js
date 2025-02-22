document.addEventListener('DOMContentLoaded', function () {
  console.log('Document is fully loaded and parsed');

  function headerColor(event) {
    const headers = document.querySelectorAll('h1');
    headers.forEach(header => {
      header.style.color = 'red';
    });
  }

  const navLinks = document.querySelectorAll('.my-class');
  navLinks.forEach(link => {
    link.addEventListener('click', headerColor);
  });
});

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}
