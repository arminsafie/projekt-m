document.addEventListener("DOMContentLoaded", function () {
  // Set timer in ms for autoplay
  const interval = 4000;

  const myCarousel = new bootstrap.Carousel(
    document.getElementById("carouselExample"),
    {
      interval: false,
    }
  );

  function startAutoplay() {
    setInterval(() => {
      myCarousel.next();
    }, interval);
  }

  startAutoplay();
});
