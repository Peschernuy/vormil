$(function () {

  $('.parasite__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots: true
  })

  $('.aldenbazol__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
    })

  $('.profilactic__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true
    })

  $('.doctors__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true
  })

  $('.reviews__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: true,
    
  })



 var accordion = function () {
   var data = $('.accordion').attr('data-accordion');

   $('.accordion-header').on('click', function (){
     if (data === 'close'){
       $('.accordion-body').slideUp();
       if($(this).hasClass('active')){
         $(this).toggleClass('active');
       }
       else{
         $('.accordion-header').removeClass('active');
         $(this).toggleClass('active');
       }
     }
     else{
       $(this).toggleClass('active');
     }
     $(this).next('.accordion-body').not(':animated').slideToggle();
   });
 }
 accordion();



  $('.accordion-header').on('.click', function() {
    $('.accordion-header').toggleClass('accordion-header--active');
  });

});