
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
