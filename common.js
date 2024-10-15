$(window).load(function() {
  
  // Bind a smooth scroll event.
  $("a[href^=#]:not()").click(function() {
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("body,html").animate({scrollTop:position}, speed);
    return false;
  });
});


$(function() {
  var $header = $(".header"),
      $body = $("body"),
      currentScroll,
      currentScrollAfter;



  function bodyFixReset() {
    $body.attr({"style":""});
    $("html,body").prop({ scrollTop: currentScrollAfter });
    $body.removeClass("fixed");
  }

  // 繝医げ繝ｫ繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ
  $(".menuicon-btn").on("click", function() {
    if ($(".global-nav").is(":hidden")) {
      $(this).parents($header).addClass("active").find(".global-nav").fadeIn(500);
      bodyFix();
    } else {
      $(this).parents($header).removeClass("active").find(".global-nav").fadeOut(500, function () {
        bodyFixReset();
      });
    }
  });

  $(window).on("resize", function () {
    if ($(window).innerWidth() <= spWidth) {
      var timer = false;
      if (timer !== false) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        var currentWidth = $(window).innerWidth();
        if ($("body").hasClass("fixed") && currentWidth > spWidth) {
          $(".menuicon-btn").removeClass("active");
          bodyFixReset();
        }
      }, 200);
    }
  });




  



});// load function





