$(document).ready(function(){
    // init Isotope
var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.service-filter').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  $('.blog-filter').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
    $('.owl-carousel').owlCarousel({
      loop:true,
      responsiveClass:true,
      autoplay:true,
      responsive:{
          0:{
              items:1,
              nav:true,
          },
          600:{
              items:1,
              nav:true
          },
          1000:{
              items:1,
              nav:true,
          }
      }
    });
  });