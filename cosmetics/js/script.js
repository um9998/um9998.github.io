$(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
  });
  let wd = $(window).width();
  console.log(wd);
  $(window).resize(function () {
    let wd = $(window).width();
    console.log(wd);
  });

  $(".menu").css("width", "0");
  $(".menubtn")
    .find("a")
    .hover(
      function () {
        $(".menu").css("width", "20%");
      },
      function () {
        $(".menu").css("width", "0");
      }
    );
  $(".menu").hover(
    function () {
      $(".menu").css("width", "20%");
    },
    function () {
      $(".menu").css("width", "0");
    }
  );
  $(".menu610").css("width", "0");
  $(".menubtn610")
    .find("a")
    .hover(
      function () {
        $(".menu610").css("width", "70%");
      },
      function () {
        $(".menu610").css("width", "0");
      }
    );
  $(".menu610").hover(
    function () {
      $(".menu610").css("width", "70%");
      $(".right_top").css("display", "none");
    },
    function () {
      $(".menu610").css("width", "0");
      $(".right_top").css("display", "block");
    }
  );
  let ht = $(window).height();
  console.log(ht);
  $("section").height(ht);
  $(window).resize(function () {
    let ht = $(window).height();
    $("section").height(ht);
  });
  $(window).scroll(function () {
    let t = $(this).scrollTop();
    console.log(t);

    if (t > ht / 1.8) {
      $(".sec2_top").find("img").addClass("imgscale");
      $(".sec2_top").find("div").eq(0).find("p").addClass("textmove1");
      $(".sec2_top").find("div").eq(1).find("p").addClass("textmove2");
    }
    if (t > ht * 1.2) {
      $(".sec3Contents").find("img").removeClass().addClass("imgscale");
    }
    if (t > ht * 2) {
      $(".items3").find("img").removeClass().addClass("imgscale");
    }
    if (t > ht * 2.5) {
      $(".sec4Contents").find("img").removeClass().addClass("imgscale");
    }
    if (t > ht * 3.2) {
      $(".items4").find("img").removeClass().addClass("imgscale");
    }
    if (t > ht * 4) {
      $(".sec5").find("img").removeClass().addClass("imgscale");
    }
  });
});
