$(function () {
  //$(".lnb").hide();

  $(".gnb>li").hover(
    function () {
      let wd = $(window).width();
      console.log(wd);
      $(this).find(".lnb").slideDown();
      $(".bg2").css("height", "60%");
    },
    function () {
      $(this).find(".lnb").slideUp();
      $(".bg2").css("height", "0");
    }
  );
  let wd = $(window).width();
  console.log(wd);
  $(window).resize(function () {
    let wd = $(window).width();
    console.log(wd);
    if (wd < 500) {
      $(".gnb>li").slideUp();
    }
  });
  $(".logo").click(function () {
    $(".gnb>li").slideDown();
  });
  let ht = $(window).height();
  console.log(ht);
  $("section").height(ht);
  $(".section5").height(ht / 3);
  $(window).resize(function () {
    let ht = $(window).height();
    $("section").height(ht);
  });
  $(".title1").addClass("titleAni1");
  $(".title2").addClass("titleAni2");
  $(window).scroll(function () {
    let t = $(this).scrollTop();
    console.log(t);
    if (t > 20) {
      $(".bg2").css("display", "none");
    }
    if (t > ht / 2) {
      $(".section2 .imageBox").find("img").removeClass().addClass("imgScale");
    }
    if (t > ht * 1.5) {
      $(".bgBox").find("img").removeClass().addClass("bgScale");
    }
    if (t > ht * 2) {
      $(".section4 .imageBox").find("img").removeClass().addClass("imgScale");
    }
    if (t > ht * 3.5) {
      $(".openwindow .left").css("width", "0");
      $(".openwindow .right").css("width", "0");
    }
  });
  $(".lnb>li>ul").hide();
  $(".gnb>li").hover(
    function () {
      let aa = $(this).index();
      console.log(aa);
      $(this).css("backgroundColor", "#fff");
      let rwd = $(".gnb>li").find("a").width();
      console.log(rwd);
      $("#menuLine").addClass("active");
      if (aa == 0) {
        $(".lnb4").slideDown().css("height", "30%");
        $("#menuLine").css("left", "0");
      }
      if (aa == 1) {
        $(".lnb1").slideDown().css("backgroundColor", "#fff");
        $("#menuLine").css("left", rwd);
      }
      if (aa == 2) {
        $(".lnb2").slideDown().css("backgroundColor", "#fff");
        $("#menuLine").css("left", rwd * 2);
      }
      if (aa == 3) {
        $(".lnb3").slideDown().css("backgroundColor", "#fff");
        $("#menuLine").css("left", rwd * 3);
      }
      if (aa == 4) {
        $(".lnb5").slideDown().css("height", "30%");
        $("#menuLine").css("left", rwd * 4);
      }
    },
    function () {
      $(".lnb>li>ul").hide();
      $("#menuLine").css("right", "20%");
      $("#menuLine").removeClass("active");
    }
  );
  $(".lnb>li>ul").hover(
    function () {
      $(this).show();
      $("#menuLine").addClass("active");
    },
    function () {
      $(this).hide();
      $("#menuLine").removeClass("active");
    }
  );
  $(".lnb>li>ul a").hover(
    function () {
      $(this).css("color", "#C2A947");
    },
    function () {
      $(this).css("color", "#000");
    }
  );
  $(".language").click(function () {
    $(".triWrap").toggleClass("on");
  });
  $(".search").click(function () {
    $(".modalBg").slideDown();
  });
  $(".close").click(function () {
    $(".modalBg").slideUp();
  });
  $(window).scroll(function () {});
  $("section").on("mousewheel", function (event, delta) {
    console.log(delta);
    if (delta > 0) {
      console.log("올림");
      $(".headerwrap").slideDown();
    } else if (delta < 0) {
      console.log("내림");
      $(".headerwrap").slideUp();
    }
  });
});
