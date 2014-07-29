function UpdateTableHeaders() {   
  var el = $('.main-nav');
  var offset = el.offset();
  var scrollTop = $(window).scrollTop();
  var floatingHeader = $(".main-nav-floating");

  if (scrollTop > offset.top) {
     floatingHeader.css({
      "visibility": "visible"
     });
  } else {
     floatingHeader.css({
      "visibility": "hidden"
     });      
  }
}

// DOM Ready      
(function($) {
var clonedHeaderRow = $(".main-nav");
   clonedHeaderRow
     .before(clonedHeaderRow.clone())
     //.css("width", clonedHeaderRow.width())
     .addClass("main-nav-floating");

$(window)
  .scroll(UpdateTableHeaders)
  .trigger("scroll");   

})(jQuery);