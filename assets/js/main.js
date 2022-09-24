(function ($)
  { "use strict"
  
/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });


/* 2. slick Nav */
// mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };


/* 3. MainSlider-1 */
    // h1-hero-active
    function mainSlider() {
      var BasicSlider = $('.slider-active');
      BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: false,
        autoplaySpeed: 4000,
        dots: false,
        fade: true,
        arrows: false, 
        prevArrow: '<button type="button" class="slick-prev"><img src="img/hero_thumb/arrow-left.png" alt=""><img class="secondary-img" src="img/hero_thumb/left-white.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/hero_thumb/arrow-right.png" alt=""><img class="secondary-img" src="img/hero_thumb/right-white.png" alt=""></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });

      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    }
    mainSlider();

/* 4. Testimonial Active*/
  var testimonial = $('.h1-testimonial-active');
    if(testimonial.length){
    testimonial.slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay:false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrow:false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
            }
          }
        ]
      });
    }


/* 5. Gallery Active */
    var client_list = $('.gallery-active');
    if(client_list.length){
      client_list.owlCarousel({
        slidesToShow: 3,
        slidesToScroll: 1,
        loop: true,
        autoplay:true,
        speed: 3000,
        smartSpeed:2000,
        nav: false,
        dots: false,
        margin: 0,

        autoplayHoverPause: true,
        responsive : {
          0 : {
            nav: false,
            items: 2,
          },
          768 : {
            nav: false,
            items: 3,
          }
        }
      });
    }


/* 6. Nice Selectorp  */
  var nice_Select = $('select');
    if(nice_Select.length){
      nice_Select.niceSelect();
    }

/* 7.  Custom Sticky Menu  */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $(".header-sticky").removeClass("sticky-bar");
      } else {
        $(".header-sticky").addClass("sticky-bar");
      }
    });

    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
          $(".header-sticky").removeClass("sticky");
      } else {
          $(".header-sticky").addClass("sticky");
      }
    });



/* 8. sildeBar scroll */
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="ti-arrow-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


/* 9. data-background */
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      });


/* 10. WOW active */
    new WOW().init();



/* 13. counterUp*/
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });


    
// 11. ---- Mailchimp js --------//  
    function mailChimp() {
      $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();



// 12 Pop Up Img
    var popUp = $('.single_gallery_part, .img-pop-up');
      if(popUp.length){
        popUp.magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });
      }


      const galleryItem = document.getElementsByClassName("gallery-item");
      const lightBoxContainer = document.createElement("div");
      const lightBoxContent = document.createElement("div");
      const lightBoxImg = document.createElement("img");
      const lightBoxPrev = document.createElement("div");
      const lightBoxNext = document.createElement("div");
      
      lightBoxContainer.classList.add("lightbox");
      lightBoxContent.classList.add("lightbox-content");
      lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
      lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");
      
      lightBoxContainer.appendChild(lightBoxContent);
      lightBoxContent.appendChild(lightBoxImg);
      lightBoxContent.appendChild(lightBoxPrev);
      lightBoxContent.appendChild(lightBoxNext);
      
      document.body.appendChild(lightBoxContainer);
      
      let index = 1;
      
      function showLightBox(n) {
          if (n > galleryItem.length) {
              index = 1;
          } else if (n < 1) {
              index = galleryItem.length;
          }
          let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
          lightBoxImg.setAttribute("src", imageLocation);
      }
      
      function currentImage() {
          lightBoxContainer.style.display = "block";
      
          let imageIndex = parseInt(this.getAttribute("data-index"));
          showLightBox(index = imageIndex);
      }
      for (let i = 0; i < galleryItem.length; i++) {
          galleryItem[i].addEventListener("click", currentImage);
      }
      
      function slideImage(n) {
          showLightBox(index += n);
      }
      function prevImage() {
          slideImage(-1);
      }
      function nextImage() {
          slideImage(1);
      }
      lightBoxPrev.addEventListener("click", prevImage);
      lightBoxNext.addEventListener("click", nextImage);
      
      function closeLightBox() {
          if (this === event.target) {
              lightBoxContainer.style.display = "none";
          }
      }
      lightBoxContainer.addEventListener("click", closeLightBox);

})(jQuery);
