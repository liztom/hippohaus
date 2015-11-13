$(document).ready(function(){
   $('.js-icon').on('click', function(){
      $(this).parent('.rating').children('.icon').removeClass('icon--active');
      $(this).addClass('icon--active');
   });
});