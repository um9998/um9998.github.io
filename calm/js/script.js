$(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });
});
$(function () {
  $(".gnb_sub").css("display", "none");
  $("#about").hover(
    function () {
      $(".gnb_sub").css("display", "block");
    },
    function () {
      $(".gnb_sub").css("display", "none");
    }
  );
  let ht = $(window).height();
  $("section").height(ht);
  $(window).resize(function () {
    let ht = $(window).height();
    $("section").height(ht);
  });
  $(window).scroll(function () {
    let t = $(this).scrollTop();
    console.log(t);
    if (t >= ht * 2) {
      $(".top_baner").addClass("on");
    }
    if (t > ht) {
      $("header").find("a").addClass("col");
    } else $("header").find("a").removeClass("col");
  });
  $("section").on("mousewheel", function (event, delta) {
    console.log(delta);
    if (delta > 0) {
      if ($(this).next() != undefined) {
        try {
          let prev = $(this).prev().offset().top;
          console.log("prev :" + prev);
          //문서 전체를 prev에 저장된 위치로 이동
          $("html,body").stop().animate({ scrollTop: prev }, 1000);
        } catch (e) {}
      }
      //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
      //마우스 휠을 내렸을때
    } else if (delta < 0) {
      if ($(this).next() != undefined) {
        try {
          //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
          let next = $(this).next().offset().top;
          //문서 전체를 next에 저장된 위치로 이동
          $("html,body").stop().animate({ scrollTop: next }, 1000);
        } catch (e) {}
      }
    }
  });
  let wd = $(window).width();
  console.log(wd);
  $(window).resize(function () {
    let wd = $(window).width();
    console.log(wd);
  });
});
