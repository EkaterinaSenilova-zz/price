$(document).ready(function(){
  $(".team-carousel").owlCarousel({
  	items: 3,
  	nav: true,
    margin: 20,
    rewind: true,
    responsiveClass: true, 
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1100:{
            items:3
        }
    },
    dots: false,
    navText: [
    	'<i class="fas fa-angle-left"></i>',
    	'<i class="fas fa-angle-right"></i>'
    	]

  });

   $(".exampl-carousel").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    dots: false,
    navText: [
        '<i class="fas fa-angle-left"></i>',
        '<i class="fas fa-angle-right"></i>'
        ]

  });
   $(".recomend-carousel").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    dots: true,
    animateOut: 'owl-backSlide-out',
    animateIn: 'owl-backSlide-in',    
    navText: [
        '<i class="fas fa-angle-left"></i>',
        '<i class="fas fa-angle-right"></i>'
        ]

  });
});
