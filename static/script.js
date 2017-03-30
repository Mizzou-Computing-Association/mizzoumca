$(document).ready(function() {
   if (location.href.split("/").slice(-1) !== 'landing.html') {
      $(".se-preload-con").fadeOut("fast");
   }
   $('.parallax').parallax();
   $(".button-collapse").sideNav();

   var options = [
    {selector: '.card', offset: 20, callback: function(el) {
        Materialize.showStaggeredList($(el));
      }}
   ];
   console.log('options');
   Materialize.scrollFire(options);

});

