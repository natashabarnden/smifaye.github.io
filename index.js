//Top navigation appear on scrolling

(function ($) {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.logo').fadeIn(400);
      } else {
        $('.logo').fadeOut(400);
      }
    });
  });
})(jQuery);