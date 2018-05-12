
function openChat() {
	var popapChat = $('.js-popap-chat');
	var popapCalc = $('.js-popap-calc');
	var popapClose = $('.js-chat-close');

	popapClose.click(function() {
		popapChat.addClass('is-close');
	});

	$(window).on("scroll", function() {
		let scrollTop = $(window).scrollTop();
		if (scrollTop > 0 && !popapChat.hasClass('is-open') ) {
			popapChat.addClass('is-open');
		}
	});
}
openChat();

function dropDown() {
	$(document).ready(function() {
  $('.js-dropdown-trigger, .dropdown__link').click(function() {
    $('.js-dropdown-list').slideToggle(300);
    $('.fa-angle-down').toggleClass('active');
  });
});
// $('.js-dropdown-trigger').click(function() {
//   $('.fa-angle-down').addClass('active');
// }, function() {
//   $('.fa-angle-down').removeClass('active');
// });
}

dropDown();

function openPopaps() {
	var popupOpen = $('.js-popup-step-open');
	var popupMain = $('.js-popup-main');
	popupOpen.click(function() {
		popupMain.addClass('open');
		$('body').addClass('open');
	})
};
openPopaps();

function openPopap() {
	var popupOpen = $('.js-popap-calc');
	var popupMain = $('.js-popup-main');
	popupOpen.click(function() {
		popupMain.addClass('open');
		$('body').addClass('open');
	})
};
openPopap();

function closePopap() {
	var popupClose = $('.js-close-popup');
	var popupMain = $('.js-popup-main');
	popupClose.click(function() {
		popupMain.removeClass('open');
		$('body').removeClass('open');
	})
};
closePopap();

// function step() {
// 	var item = $('.js-item-3');
// 	item.click(function() {
// 		item.prevAll().addClass('prev');
// 		// $('.is-active').addClass('prev');
		
// 	});
// };
// step();

// function openStep() {

//   $('.popup-step__line').each(function() {
//     $(this).find('.popup-step__item').each(function(i) {
//       $(this).click(function(){
//         $(this).addClass('is-active').prevAll().removeClass('is-active').addClass('prev')
//           .closest('div.popup-step__content-line').find('div.popup-step__content').removeClass('is-active').eq(i).addClass('is-active');
//       });
//     });
//   });

// };
// openStep();

function openStep() {
	$('.popup-step__item').on('click', $('.popup-step__item:not(.is-active)'), function() {
 		$(this)
  			.addClass('is-active').prevAll().removeClass('is-active').addClass('prev')
   			.closest('div.popup-step__content-line').find('div.popup-step__content').removeClass('is-active').eq($(this).index()).addClass('is-active');
 });
		$('.popup-step__item').on('click', function() {
	 		$(this).nextAll().removeClass('is-active').removeClass('prev').closest('div.popup-step__content-line').find('div.popup-step__content').removeClass('is-active').eq($(this).index()).addClass('is-active');
	 });
};
openStep();

function callBack() {
	$(document).ready(function() {
	$('.middle-header .single-widget .btn').click( function(event){
		event.preventDefault();
		$('.call-back__overlay').fadeIn(400,
		 	function(){
				$('.call-back') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('.call-back__close-btn, .call-back__overlay').click( function(){
		$('.call-back')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('.call-back__overlay').fadeOut(400);
				}
			);
	});
});
}

callBack();

function checkBox() {
	$(document).ready(function () {
    $('.option__form-block label input[type=checkbox]').change(function(){
        $(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
    });
});
}

checkBox();

function slickSlider() {
 var $status = $('.current-gallery');
    var $slickElement = $('.slider-single');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });
if ($('.slider-single').lenght) {
	$('.slider-single').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  asNavFor: '.slider-nav',
	  autoplay: false,
	  adaptiveHeight: true,
	  prevArrow: '<button type="button" class="slider__prev"><i class="fas fa-angle-left"></i></button>',
	  nextArrow: '<button type="button" class="slider__next"><i class="fas fa-angle-right"></i></button>',
	});
}
if ($('.slider-nav').lenght) {
	$('.slider-nav').slick({
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  asNavFor: '.slider-single',
	  dots: false,
	  focusOnSelect: true,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			}
		}, {
			breakpoint: 640,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
		}
		}, {
			breakpoint: 420,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
		}
		}]

	});
}

}

slickSlider();

$(function() {
	if ($('.js-daterange').length) {
		$('.js-daterange').daterangepicker({
			autoApply: true,
		  locale: {
		       format: 'DD.MM.YYYY'
		     }
		}, function(start, end, label) {
		  // console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
		});
	}
  
});
