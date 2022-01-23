// OWL CAROUSEL

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
   margin: 10,
   nav: true,
   autoplay: true,
   autoplayTimeout: 3000,
   autoplayHoverPause: true,
   loop: true,
   responsive: {
     0: {
       items: 1
     },
     600: {
       items: 2
     },
     1000: {
       items: 4
     },
     
   }
 })
})

