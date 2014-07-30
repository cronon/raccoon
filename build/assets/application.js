var updateTableHeaders = function() {   
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

/*
  stickyTop -- top relative to the top of the screen in pixels
 */
var updateAside = function(stickyTop, startOffset){
  return function(){
    var aside = $('.sticky-aside');
    var scrollTop = $(window).scrollTop();

    if(scrollTop > startOffset - stickyTop){
      aside.css('margin-top', scrollTop + stickyTop - startOffset);
    } else {
      aside.css('margin-top',0);
    }
  }
}


window.onload = function() {
  $(".sticky").each(function(e){
    var clonedHeaderRow = $(this);
    clonedHeaderRow
     .before(clonedHeaderRow.clone())
     //.css("width", clonedHeaderRow.width())
     .addClass("sticky-floating");
  })

  $(window)
    .scroll(updateTableHeaders)
    .trigger("scroll");
  $(window)
    .scroll(updateAside(87, 196))
    .trigger("scroll"); 
}