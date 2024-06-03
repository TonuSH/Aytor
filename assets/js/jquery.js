
//index page banner slider
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


//product slider
$(function(){
  $('.product_slider').slick({
    prevArrow:`.leftArrow`,
    nextArrow:`.rightArrow`,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 673,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})

//deal days offer js
$(function(){
  $('#deals_clock').countdown('2025/10/10', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="clock_card"><h3>%D</h3> <p>Days</p></div> ' + '<span>:</span>'
      + '<div class="clock_card"><h3>%H</h3> <p>Hours</p></div> ' + '<span>:</span>'
      + '<div class="clock_card"><h3>%M</h3> <p>Minutes</p></div> ' + '<span>:</span>'
      + '<div class="clock_card"><h3>%S</h3> <p>Seconds</p></div>'));
  });
})

//deal days slider
$(function(){
  $('.deal_slider').slick({
      arrows: false,
      infinite: true,
      dots: true,
      dotsClass: "dealDots container",
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 600,
    });
})

//latest news slider
$('.news_slider').slick({
  dots: true,
  dotsClass: "dealDots container",
  infinite: false,
  arrows:false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 673,
      settings:{
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//counter up js
$(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
})

//leadership expert team of about page slider
$('.team_slider').slick({
  infinite: true,
  arrows:false,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 673,
      settings:{
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// section six 
 $(".section_slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  fade: true,
  prevArrow: false,
  nextArrow: false,
  dotsClass: "dealDots container",
  autoplay: true,
  autoplaySpeed: 1000,
});
//aetor instagram slider
$(function(){
  $('.instagram-slider').slick({
    infinite: true,
    dots: true,
    dotsClass: "dealDots container",
    arrows:false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 673,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})