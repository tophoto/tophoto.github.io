$(document).ready(function() {
   $('.menu_icon').click(function(event) {
     $('.menu_icon,.menu_body').toggleClass('active');
     $('body').toggleClass('lock');
 
   });
 });

