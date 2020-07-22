(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    $('.feature-slider').owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      nav: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      autoplay: false,
      smartSpeed: 500,
    });
  });

  jQuery(window).on('load', function () {});
})(jQuery);
