document.addEventListener('DOMContentLoaded', function () {
  const slidesContainer = document.querySelector('.slides');
  const imageCount = 13;
  const folderPath = './porfolio/'; // Ensure this matches your folder structure

  for (let i = 1; i <= imageCount; i++) {
    const slide = document.createElement('li');
    slide.className = 'slide';
    if (i === 1) slide.classList.add('active');
    slide.innerHTML = `<img src="${folderPath}${i}.jpg" alt="Portfolio Image ${i}" class="portfolio-image">`;
    slidesContainer.appendChild(slide);
  }

  // Carousel Navigation Logic
  const buttons = document.querySelectorAll("[data-carousel-button]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = slidesContainer.querySelectorAll(".slide");
      const activeSlide = slidesContainer.querySelector(".active");

      if (!activeSlide) {
        console.error("No active slide found.");
        return;
      }

      let newIndex = [...slides].indexOf(activeSlide) + offset;

      // Loop back to start/end if out of bounds
      if (newIndex < 0) newIndex = slides.length - 1;
      if (newIndex >= slides.length) newIndex = 0;

      slides[newIndex].classList.add("active");
      activeSlide.classList.remove("active");
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Simplified parallax effect for hero section
  const hero = document.querySelector('.hero');
  let isScrolling = false;
});