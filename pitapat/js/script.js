$(function () {
  let ht = $(window).height();
  console.log(ht);
  $("#page").height(ht);

  $(window).resize(function () {
    let ht = $(window).height();
    console.log(ht);

    $("#page").height(ht);
  });

  $(window).scroll(function () {
    let t = $(this).scrollTop();
    console.log(t);
    if (t < ht) {
      $(".headerWrap").find("a").css("color", "#fff");
      $(".barMenu").find("div").css("backgroundColor", "#fff");
    }
    if (t > ht) {
      $(".headerWrap").find("a").css("color", "#000");
      $(".barMenu").find("div").css("backgroundColor", "#000");
    }
    if (t > ht * 1.3) {
      $(".page2").addClass("colorChange");
      $(".textBox").find("h1").attr("class", "off1");
      $(".subtitle").find("h3").css("color", "#fff");
    }
    if (t > 2000) {
      $(".headerWrap").find("a").css("color", "#fff");
      $(".barMenu").find("div").css("backgroundColor", "#fff");
      $(".highlight").removeClass("activelight");
    }

    if (t > 4900) {
      $(".headerWrap").find("a").css("color", "#000");
      $(".barMenu").find("div").css("backgroundColor", "#000");
      $(".highlight").addClass("activelight");
    }
    if (t > ht * 6 + 200) {
      $(".headerWrap").find("a").css("color", "#fff");
      $(".barMenu").find("div").css("backgroundColor", "#fff");
      $(".highlight").removeClass("activelight");
    }
  });
  $(function () {
    $(".textBox").hover(
      function () {
        $(this)
          .find("div")
          .stop()
          .removeClass("textBoxHover2")
          .addClass("textBoxHover1");
      },
      function () {
        $(this)
          .find("div")
          .stop()
          .removeClass("textBoxHover1")
          .addClass("textBoxHover2");
      }
    );
  });

  $(".barMenu").click(function () {
    $(".headerGnb").css("right", "0");
  });
  $(".close").click(function () {
    $(".headerGnb").css("right", "-40%");
  });

  let interval = setInterval(light, 1000);

  function light() {
    for (let c = 0; c < 4; c++) {
      if (c < 4) {
        $(".line1").find("span").eq(c).addClass("active");
      } else {
        c = 0;
      }
      console.log(c);
      $(".line1")
        .find("span")
        .each(function () {
          if ($(this).hasClass("active")) {
            $(this).removeClass("active");
          } else {
            $(this).addClass("active");
          }
          !$(this).hasClass("active");
        });
    }
  }
});
