window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}


$(function() {

// kvのスライド
  $('.kv_slide').each(function() {

    var $slides = $(this).find('.kv_slideItem'),
        slideCount = $slides.length,
        currentIndex = 0;

    $slides.eq(currentIndex).fadeIn();
    setInterval(nextSlide, 4300);

    function nextSlide() {
      
      var nextIndex = (currentIndex + 1) % slideCount;

      $slides.eq(currentIndex).fadeOut();
      $slides.eq(nextIndex).fadeIn();
      currentIndex = nextIndex;
    }
  });


// worksパララックス
  var bgTop = $('.works_overview img').offset().top;

  $(window).scroll(function() {    
    var  winTop = $(this).scrollTop();

     $('.works_overview img').css('top', winTop - bgTop - 420  + 'px');          
  });


// スタッフスライド
  $('.staff_slides').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: true,
    prevArrow: '<button type="button"  aria-lavel="Previous" class="slick-arrow slick-prev" style></button>',
    nextArrow: '<button type="button" aria-label="Next" class="slick-arrow slick-next"style></button>',
    slidesToShow: 3,
    speed: 700,
  });





  // ヘッダースクロール後のbgとスクロールトップ
  var appear = false,
      pagetop = $('.scroll_top'),
      header = $('header');

  $(window).scroll(function() {
    if($(this).scrollTop() > 500) {
      if(appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '0px'
        }, 500);
        if(window.matchMedia('(min-width : 1051px)').matches) {
          header.addClass('scroll_nav');
        }
      }
    } else {
      if(appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-70px'
        }, 500);
        if(window.matchMedia('(min-width : 1051px)').matches) {
          header.removeClass('scroll_nav');
        }
      } 
    }
  });


// スムーズスクロール
  pagetop.click(function() {
    $('body, html').animate({
      scrollTop: 0
    }, 700, );
  });


// ヘッダーホバーメニュー
if(window.matchMedia('(min-width : 1051px)').matches) {
  $('.header_tab_menu').hover(function() {
    if($(window).scrollTop() <= 500) {
      header.toggleClass('scroll_nav');
    }
  });
}



  // タブ開いた時背面スクロールしない
  // var state = false,
  //     posi;

  // $('.header_tab_menu').on('mouseover', function() {
  //   if(state == false) {
  //     posi = $(window).scrollTop();
  //     $('body').addClass('bodyfixed').css('top', -posi);
  //     state = true;
  //   } else {
  //     $('body').removeClass('bodyfixed').css('top', 0);
  //     state = false;
  //   }
  // });


});
