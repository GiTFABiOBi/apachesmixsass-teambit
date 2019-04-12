function openMenuMobile() {

  var menu = $(".container-mobile");
  menu.slideToggle().css("display", "block");
}

function init() {

  var bars = $(".fa-bars");
  bars.click(openMenuMobile);
}

$(document).ready(init);
