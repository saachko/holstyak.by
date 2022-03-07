jQuery(function($) {


  var content = $(".content-index");
  var contentTop = content.offset().top; 
  var toTop = $(".to-content");
  var body = $("html, body");

  $(window).on("resize", function() {
    contentTop = content.offset().top;
  });

  toTop.on("click", toTopClicked);

    function toTopClicked(event) {
      event.preventDefault();

      body.animate(
        { scrollTop: contentTop },
        1000
      );
    }
});