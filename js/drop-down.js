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