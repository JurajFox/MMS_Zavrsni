$(window).on("scroll", function () {
  var scrollPos = $(window).scrollTop();
  if (scrollPos <= 300) {
    $(".navbar-custom").addClass("top");
  } else {
    $(".navbar-custom").removeClass("top");
  }
});
