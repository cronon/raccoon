function UpdateTableHeaders() {   
  var el = $('.sticky');
  var offset = el.offset();
  var scrollTop = $(window).scrollTop();
  var floatingHeader = $(".sticky-floating");

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
  $(".sticky").each(function(e){
    var clonedHeaderRow = $(this);
    clonedHeaderRow
     .before(clonedHeaderRow.clone())
     //.css("width", clonedHeaderRow.width())
     .addClass("sticky-floating");
  })


$(window)
  .scroll(UpdateTableHeaders)
  .trigger("scroll");   

})(jQuery);