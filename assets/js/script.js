$(document).ready(function() {

      $("#carousel-next").click(function() {

    if ( parseInt($('#carousel').css("margin-left").replace("px", "")) == -2000) {
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

});

