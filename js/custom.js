$(function(){

  // banner slick
  
  $('.banner_slick').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 900,
    dots: true,
    prevArrow: false,
    nextArrow: false,
  });
  // back to top part
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 50){
      $(".back_top").fadeIn(500)
    }else{
      $(".back_top").fadeOut(500)
    }
    if(scrolling > 100){
      $(".main_menu").addClass("nav_menu_bg")
    }else{
      $(".main_menu").removeClass("nav_menu_bg")
    }
  });

    $(".back_top").click(function(){
      $('html,body').animate({
        scrollTop:0
      }, 900)
    });

   
    $('.screen_slick').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      speed: 500,
      dots: true,
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
          }
      }
      ]
    });

    // dark mode 
    $(".dark_mode").click(function(){
      $('html,body').toggleClass('darktheme')
    });

        //venobox part
  $('.venobox').venobox();

  // feedback part
  $('.feed_text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.feed_img'
  });
  $('.feed_img').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.feed_text',
    dots: true,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    prevArrow: false,
    nextArrow: false,
  });

});