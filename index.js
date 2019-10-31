'use strict'

function eventHandler() {
  $('.hamburger').on('click', function() {
    $('.nav-links').toggleClass('invisible');
  });

  $('.page-link, .arrow-down-link').click(function() {
    let anchor = $(this).attr('dest');
    highlightLink(anchor);
    $('.nav-links').addClass('invisible');
    $('html, body').animate({scrollTop: $(`#${anchor}`).offset().top -50}, 400);
  });

  $(window).on('scroll', function () {
    let pos = $(window).scrollTop() + 51;
    if (pos === $('#home').offset().top) {
      highlightLink('home');
    }
    if (pos === $('#about').offset().top) {
      highlightLink('about');
    }
    if (pos === $('#portfolio').offset().top) {
      highlightLink('portfolio');
    }
    if (pos === $('#contact').offset().top ||
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