
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
	})
};
openPopaps();

function openPopap() {
	var popupOpen = $('.js-popap-calc');
	var popupMain = $('.js-popup-main');
	popupOpen.click(function() {
		popupMain.addClass('open');
	})
};
openPopap();

function closePopap() {
	var popupClose = $('.js-close-popup');
	var popupMain = $('.js-popup-main');
	popupClose.click(function() {
		popupMain.removeClass('open');
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

function openStep() {

  $('.popup-step__line').each(function() {
    $(this).find('.popup-step__item').each(function(i) {
      $(this).click(function(){
        $(this).addClass('is-active').prevAll().removeClass('is-active').addClass('prev')
          .closest('div.popup-step__content-line').find('div.popup-step__content').removeClass('is-active').eq(i).addClass('is-active');
      });
    });
  });

};
openStep();



// function openStep() {
// 	var trigerPopap = $('[data-popap-triger]');
// 	trigerPopap.click(function() {
// 	  var popapName = $(this).data('popap-triger');
// 	  console.log(popapName);
// 	  	$('[data-popap="'+popapName+'"]').addClass('open');
// 	  	trigerPopap.prevAll().addClass('prev');
// 	  	// $('body').addClass('open');
// 	});
// };
// openStep();

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


// $('.input-daterange input').each(function() {
    // $(this).datepicker('clearDates');
// });