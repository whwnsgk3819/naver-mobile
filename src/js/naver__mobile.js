$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();

  if (scrollTop >= 10) {
    $(".header__button").addClass("on");
  } else {
    $(".header__button").removeClass("on");
  }
  if (scrollTop >= 150) {
    $(".banner__top").addClass("on");
  } else {
    $(".banner__top").removeClass("on");
  }
  if (scrollTop >= 150) {
    $(".banner__bottom").addClass("on");
  } else {
    $(".banner__bottom").removeClass("on");
  }
  if (scrollTop >= 150) {
    $(".banner__top-logo").addClass("on");
  } else {
    $(".banner__top-logo").removeClass("on");
  }
});

var $sc_button = $(".securities__title-button");

$sc_button.click(function () {
  $(this).toggleClass("on");
  $(".securities__screen-wrap").toggleClass("on");
  $(".securities__besides").toggleClass("on");
});

var $wt_button = $(".webtoon__title-button");

$wt_button.click(function () {
  $(this).toggleClass("on");
  $(".webtoon__wrap").toggleClass("on");
  $(".webtoon__besides").toggleClass("on");
});

$(document).ready(function () {
  var ERROR_RANGE = 176;
  $('.banner__bottom-text-wrap').scrollLeft($('.banner__bottom-text--bold').offset().left - ERROR_RANGE)
})