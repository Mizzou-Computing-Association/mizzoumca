$(document).ready(function() {
   if (location.href.split("/").slice(-1) !== 'landing.html') {
      $(".se-preload-con").fadeOut("fast");
   }
   $('.parallax').parallax();

   var options = [
    {selector: '.card', offset: 20, callback: function(el) {
        Materialize.showStaggeredList($(el));
      }}
   ];
   console.log('options');
   Materialize.scrollFire(options);

   $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

});

