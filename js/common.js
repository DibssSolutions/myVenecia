
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

function openPopap() {
	var popapOpen = $('.js-popup-step-open');
	var popapmain = $('.js-popup-main');
	popapOpen.click(function() {
		popapmain.addClass('open');
	})
};
openPopap();

function step() {
	var item = $('.js-item-3');
	item.click(function() {
		item.prevAll().addClass('prev');
		// $('.is-active').addClass('prev');
		
	});
};
step();