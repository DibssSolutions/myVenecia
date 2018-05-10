
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