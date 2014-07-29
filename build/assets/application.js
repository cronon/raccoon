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

var updateAside = function(){
  var aside = $('.sticky-aside');

  var scrollTop = $(window).scrollTop();
  var margin = parseInt( aside.css('margin-top') );
  var deltaMargin = scrollTop - margin;
  if(deltaMargin > startOffset)
    aside.css('margin-top', margin + deltaMargin );

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
    .scroll(updateAside)
    .trigger("scroll"); 
}