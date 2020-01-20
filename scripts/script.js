// Add your custom JavaScript in this file

function scrollFunction() {
  /**
   *Check what position on the page the scrollbar is, so that no-shadow class is only applied while
   * the navbar is above the header container, but navbar has a bottom shadow after that
   */
  if ($(document).scrollTop() < 548) {
    $('.navbar-fixed nav').addClass('no-shadow');
  } else {
    $('.navbar-fixed nav').removeClass('no-shadow');
  }
}

// Everything inside this function will fire once the DOM is ready for JS
$(function() {

  // Activate Materialize's sidenav animation with jQuery
  $('.sidenav').sidenav();

  // As the user scrolls, call scrollFunction
  window.onscroll = function() {
    scrollFunction();
  };

  // ====== Start custom JS below here! ======

}); // end of document ready
