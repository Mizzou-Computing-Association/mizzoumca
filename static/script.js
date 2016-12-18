$(document).ready(function() {
   if (location.href.split("/").slice(-1) !== 'landing.html') {
      $(".se-preload-con").fadeOut("fast");
   }
});

$(function() {
   $('#login-form').bind('click', function(event) {
      event.preventDefault();

      $.ajax({
         type: 'POST',
         url: 'php/login.php',
         data: $('form').serialize(),
         success: function(data) {
            counsole.out(data);
         }
      });

   });
});

