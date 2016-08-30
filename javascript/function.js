/**
 *Slides......
**/

 $(function() {
    var sel = $('.slides');
    sel.children(':gt(0)').hide();
    var count = 1;
    var now;

    //Slide function......//
    window.time = function() {
      now = setInterval(function() {
        sel.children().eq(0).fadeOut().next().fadeIn().end().appendTo(sel);
      }, 2000);
    };

    //Hover to stop Slide
    $(function() {
      sel.hover(function() {
        clearInterval(now)
      }, time);
    });
  });


/**
 *Infi-Scroll......
**/

$(function(){
    $(".infi-scroll .objects").slice(0, 3).show(); // select the first five

    $("#load").click(function(e){ // click event for load more
        e.preventDefault();
        $(".infi-scroll .objects:hidden").slice(0, 3).show(); // select next 3 hidden divs and show them
        if($(".infi-scroll .objects:hidden").length == 0){ // check if any hidden divs still exist
            $('#load h3').hide();
            $('#hide').show();
        }
    });

    $("#hide").click(function(event) { // click event for show less posts
      $(".infi-scroll .objects").slice(3, 10).hide();
      $("#load h3").text('View More');
      $(this).hide();
    });
});