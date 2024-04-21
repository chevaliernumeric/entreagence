document.addEventListener('DOMContentLoaded', function () {
    var carouselElement = document.querySelector('.carousel');
    var carouselInstance = new bootstrap.Carousel(carouselElement, {
      interval: 2000,
      wrap: true
    });
  
    var cards = document.querySelectorAll('.carousel .carousel-indicators [data-bs-target]');
    cards.forEach(function(card, index) {
      card.addEventListener('mouseenter', function () {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        
        carouselInstance.to(index);
      });
  
      card.addEventListener('mouseleave', function () {
        card.classList.remove('active');
      });
    });
  });
  