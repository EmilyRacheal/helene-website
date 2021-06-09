$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".navbar").addClass("mycolor");
      $("nav.fixed-top .nav-link").addClass("mycol");
      $(".navbar").fadeIn();
    } else {
      $(".navbar").removeClass("mycolor");
      $("nav.fixed-top .nav-link").removeClass("mycol");
      $(".navbar").fadeIn();
    }
}); 