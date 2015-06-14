$(document).ready(function(){

$(".nav-collapse-link").click(function(){

	$(this).toggleClass("open");
  $(this).closest("li").toggleClass("open");
})

//////////////slider
$('.main-slider').slick({
  dots: true,
  infinite: false,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$('.default-slider').slick({
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true,
  arrows: false,
  variableWidth: true
});
////////////////////////////////////validate
$(".form-validate").validate({
        rules: {
        name: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "поле заполнено не верно",
        email: "поле заполнено не верно"
      }
});

$(".form-order-user").validate({
        rules: {
        name: "required",
        phone: "required",
        city: "required",
        address: "required"
      }

});

});