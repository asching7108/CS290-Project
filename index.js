'use strict'

function eventHandler() {
  $('.hamburger').on('click', function() {
    $('.nav-links').toggleClass('invisible');
  });

  $('.page-link, .arrow-down-link').click(function() {
    let anchor = $(this).attr('dest');
    $('.nav-links').addClass('invisible');
    $('html, body').animate({scrollTop: $(`#${anchor}`).offset().top -50}, 400);
  });

  $(window).on('scroll', function () {
    let pos = $(window).scrollTop();
    if (pos + 51 > $('#home').offset().top) {
      highlightLink('home');
    }
    if (pos + 51 > $('#about').offset().top) {
      highlightLink('about');
    }
    if (pos + 51 > $('#portfolio').offset().top) {
      highlightLink('portfolio');
    }
    if (pos + 51 > $('#contact').offset().top ||
        pos + $(window).height() === $(document).height()) {
      highlightLink('contact');
    }
  });

  function highlightLink(elementID) {
    $('.nav-links span').removeClass('active');
    $('nav').find(`[dest="${elementID}"]`).addClass('active');
  }
}

$(eventHandler());
