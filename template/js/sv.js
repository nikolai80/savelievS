var sv = sv || {}
sv = {
  init: function() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 10000,
      autoplayHoverPause: true
    });
  }
}
