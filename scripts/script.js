// Add your custom JavaScript in this file

// Everything inside this function will fire once the DOM is ready for JS
$(function() {

  // Activate Materialize's sidenav animation with jQuery
  $('.sidenav').sidenav();

  window.onscroll = function() {
    scrollFunction();
  };

  // Start custom JS here!

}); // end of document ready


function scrollFunction() {
  if ($(document).scrollTop() < 548) {
    $('.navbar-fixed nav').addClass('no-shadow');
  } else {
    $('.navbar-fixed nav').removeClass('no-shadow');
  }
}
