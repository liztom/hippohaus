$(document).ready(function(){
   $('.js-icon').on('click', function(){
      $('.icon').removeClass('icon--active');
      $(this).addClass('icon--active');
   });
});