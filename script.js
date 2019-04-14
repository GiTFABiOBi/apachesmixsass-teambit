function editCssToScroll() {

  var header = $("#header");
  var signUp = $(".loGoogle");
  $(window).scroll(function() {

    if ($(document).scrollTop() > 100) {


      header.find(".container").css({"border-bottom" : "none", "padding" : "5px 10px"});
      header.find(signUp).css({"border" : "none", "background" : "#30488f"});
      signUp.find("a").css("color", "#fff")
      header.css({
        "box-shadow" : "0 2px 2px rgb(200, 200, 200)",
        "border-bottom" : "1px solid #999"
      });
    } else {

      header.find(".container").css({"border-bottom" : "1px solid #606060", "padding" : "20px 10px"});
      header.find(signUp).css({"border" : "1px solid #30488f", "background" : "#fff"});
      signUp.find("a").css("color", "#30488f");
      header.css({
        "box-shadow" : "none",
        "border-bottom" : "none"
      });
    }
  });
}

function init() {

  editCssToScroll();
// toggle menu hamburger
  var bars = $(".fa-bars");
  bars.click(function() {

    var ics = $(".fa-times");
    var menu = $(".container-mobile");
    menu.toggle();
    $(this).toggle();
    ics.toggle().css("display", "block");
  });
// chiude mobile menu
  var close = $(".fa-times");
  close.click(function() {

    var bars = $(".fa-bars");
    var menu = $(".container-mobile");
    menu.toggle();
    $(this).toggle();
    bars.toggle();
  });

// hover sub-menu 'Solution'
  var link = $(".top-menu");
  link.hover(function() {

    var subMenu = $(".sub-menu");
    subMenu.toggle();
  });
// hover signUp header
  var signUp = $(".loGoogle");
  signUp.mouseenter(function() {

    $(this).css("background", "#30488f");
    $(this).find("a").css("color", "#fff")
  });

  signUp.mouseleave(function() {

    $(this).css("background", "#fff");
    $(this).find("a").css("color", "#30488f")
  });
}

$(document).ready(init);
