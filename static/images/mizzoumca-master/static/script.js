$(document).ready(function() {
   if (location.href.split("/").slice(-1) !== 'landing.html') {
      $(".se-preload-con").fadeOut("fast");
   }
   $('.modal').modal();
   $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
   jQuery(document).ready(function(){
   $('.header-main').mousemove(function(e){
      var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
      var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
      $('.header-main').css('text-shadow', +rYP/15+'px '+rXP/120+'px rgba( 255, 204, 188,1), '+rYP/12+'px '+rXP/90+'px rgba(164, 177, 211,1), '+rXP/105+'px '+rYP/18+'px rgba(178, 235, 242,1)');
      });
   });
});

