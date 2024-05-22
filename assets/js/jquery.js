$(function(){
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        dotsClass: "bannerDots container",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 600,
      });
})

$(function(){
  $('.product_slider').slick({
    prevArrow:`.leftArrow`,
    nextArrow:`.rightArrow`,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });
})

$(function(){
  $('#deals_clock').countdown('2025/10/10', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="clock_card"><h3>%D</h3> <p>Days</p></div> ' + '<span>:</span>'
      + '<div class="clock_card"><h3>%H</h3> <p>Hours</p></div> ' + '<span>:</span>'
      + '<div class="clock_card"><h3>%M</h3> <p>Minutes</p></div> ' + '<span>:</span>'
      + '<div class="clock_card"><h3>%S</h3> <p>Seconds</p></div>'));
  });
})

$(function(){
  $('.deal_slider').slick({
      arrows: false,
      dots: true,
      dotsClass: "dealDots container",
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 600,
    });
})
