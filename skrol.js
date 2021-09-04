$(window).on("scroll", function () {
  var scrollPos = $(window).scrollTop();
  if (scrollPos <= 500) {
    $(".navbar-custom").addClass("top");
  } else {
    $(".navbar-custom").removeClass("top");
  }
});
