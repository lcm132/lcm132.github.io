$(document).ready(function() {

     $("#carousel-next").click(function() {

    if ( parseInt($('#carousel').css("margin-left").replace("px", "")) == -600) {
      $('#carousel').css("margin-left", "+=0")
    }
    else {
      $('#carousel').css("margin-left","-=500");
    }
  })
  //Implement the "slide to right" when the user clicks on #carousel-prev here
  $("#carousel-prev").click(function() {
    if ( parseInt($('#carousel').css("margin-left").replace("px", "")) == 0) {
      $('#carousel').css("margin-left", "+=0")
    }
    else {
      $('#carousel').css("margin-left", "+=500");
    }
  })
  var searchBarPosition = $(".Navbar-sticky").offset().top;

$(window).scroll(function() {
  
  var currentScroll = $(window).scrollTop();
  console.log(currentScroll);
  
  if (currentScroll < searchBarPosition) {
    console.log("hello");
    $(".Navbar-sticky").removeClass("Navbar-sticky-fixed");
  } else {
    $(".Navbar-sticky").addClass("Navbar-sticky-fixed");
  }
});
});

