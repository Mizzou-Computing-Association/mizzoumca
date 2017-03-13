$(document).ready(function() {
   if (location.href.split("/").slice(-1) !== 'landing.html') {
      $(".se-preload-con").fadeOut("fast");
   }
   $('.parallax').parallax();
   $(".button-collapse").sideNav();
});

