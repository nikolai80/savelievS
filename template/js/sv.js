var sv = sv || {}
sv = {
  init: function() {
    $('.mainCarowsel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 10000,
      autoplayHoverPause: true
    });
    $('.happyClients__carowsel').owlCarousel({
      center:true,
      loop: true,
      margin: 10,
      nav: false,
      items: 4
      
    });
  }
}
