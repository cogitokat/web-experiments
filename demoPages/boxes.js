$(document).ready(function() {
   $('.box').mouseenter(function() {
       $(this).animate({
           height: '+=10px',
           width: '-=10px'
       });
   });
   $('.box').mouseleave(function() {
       $('.green').show();
       $(this).animate({
           width: '+=10px',
           height: '-=10px'
       }); 
   });
   $('.red').click(function() {
       $(this).toggle(1000).toggle(1000);
   }); 
   $('.blue').click(function() {
       $(this).fadeOut(1000).fadeIn(1000);
   });
   $('.yellow').click(function() {
       $(this).fadeTo("slow", .2).fadeTo("slow", 1);
   });
   $('.green').click(function() {
        $(this).toggleClass('darkgreen');
    });
});