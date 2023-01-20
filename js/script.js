$(function () {
  let ht = $(window).height();
  console.log(ht);
  $("#page").height(ht);

  $(window).resize(function () {
    let ht = $(window).height();
    console.log(ht);
  });
  $(".content").css("opacity", "0");
  $("#title2").hide();

  $(".cir").click(function () {
    $("#text").hide();
    $("#title2").show().addClass("anim");
    $(".nextCircle").addClass("nCircle");
  });
  $(".nextCircle").click(function () {
    $(".divWrap").hide();
    $(".content").css("opacity", "1");
  });
  $(".title").hover(
    function () {
      $(this).find("a").addClass("active");
    },
    function () {
      $(this).find("a").removeClass("active");
    }
  );
  $(function () {
    $(".bxslider").bxSlider({
      mode: "vertical",
      moveSlides: 1,
      slideMargin: 0,
      infiniteLoop: true,
      slideWidth: 3000,
      minSlides: 1,
      maxSlides: 1,
      speed: 500,
      auto: true,
      autoHover: true,
    });
  });
});
