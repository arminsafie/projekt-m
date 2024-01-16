document.addEventListener("DOMContentLoaded", function () {
  // Set the interval (in milliseconds) for autoplay
  const interval = 2000; // Adjust as needed

  // Initialize the carousel
  const myCarousel = new bootstrap.Carousel(
    document.getElementById("carouselExample"),
    {
      interval: false, // Disable the default interval
    }
  );

  // Start autoplay
  function startAutoplay() {
    setInterval(() => {
      myCarousel.next(); // Move to the next slide
    }, interval);
  }

  // Start autoplay when the document is fully loaded
  startAutoplay();
});
