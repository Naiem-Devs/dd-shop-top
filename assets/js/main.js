(function($) {
  "use strict";
  

  





 // menu 
 $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');   
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // jQuery('.scroll').onePgaeNav({
  //   wrapper: '#onepage-nav',
  //   activeClass: 'active'
  // });

 


function initSwipper() {
  var swiper = undefined;

    swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      freeMode: false,
      direction: "vertical",
      loop: false,
      initialSlide: 0,
      loopedSlides: 8,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
      }, 
    });
    
    
    swiper.on('slideChange', function () { 
      setTimeout(() => {
        if ($('.swiper-slide-active').hasClass('despre_item')) {
          $('.menu-area li a').removeClass('active')
          $('.nav_despre').addClass('active')
          //About Active
        } else if ($('.swiper-slide-active').hasClass('cazuri_item')) {
          $('.menu-area li a').removeClass('active')
          $('.nav_cazuri').addClass('active')
          //Clients Active
        } else if ($('.swiper-slide-active').hasClass('contact_item')) {
          $('.menu-area li a').removeClass('active')
          $('.nav_contact').addClass('active')
          //Work Active
        } 
      });
    }, 500);

}
if (window.innerWidth > 768) {
    initSwipper()
}else{ 
  initSwipper()
  $('body').attr('style', 'overflow-x')
  $('.swiperMobWrapper').removeClass('swiper-wrapper')
}

 
})(jQuery);
