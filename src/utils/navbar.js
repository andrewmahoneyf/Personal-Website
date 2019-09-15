import $ from 'jquery';

// transparent scrollbar for larger devices
$(document).ready(function() {
  if ($(window).width() >= 768) {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $('.navbar-dark').addClass('bg-dark');
      } else {
        $('.navbar-dark').removeClass('bg-dark');
      }
    });
  } else {
    $('.navbar-dark').addClass('bg-dark');
    $('.collapse').addClass('bg-dark');
  }
});

// dropdown on hover
$('li.dropdown').hover(
  function() {
    $(this)
      .find('.dropdown-menu')
      .stop(true, true)
      .delay(10)
      .fadeIn(500);
  },
  function() {
    $(this)
      .find('.dropdown-menu')
      .stop(true, true)
      .delay(200)
      .fadeOut(500);
  }
);

// toggle collapse only on small devices to remove flashing
$(document).ready(function() {
  if ($(window).width() >= 768) {
    $('.navbar-collapse').removeAttr('id');
  }
});
