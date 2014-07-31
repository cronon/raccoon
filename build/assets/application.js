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

var realWidth = function (obj){
    var clone = obj.clone();
    clone.css("visibility","hidden");
    $('body').append(clone);
    var width = clone.outerWidth();
    clone.remove();
    return width;
}

window.onload = function() {

  (function($) {
    $.fn.getHiddenDimensions = function(includeMargin) {
        var $item = this,
            props = { position: 'absolute', visibility: 'hidden', display: 'block' },
            dim = { width:0, height:0, innerWidth: 0, innerHeight: 0,outerWidth: 0,outerHeight: 0 },
            $hiddenParents = $item.parents().andSelf().not(':visible'),
            includeMargin = (includeMargin == null)? false : includeMargin;

        var oldProps = [];
        $hiddenParents.each(function() {
            var old = {};

            for ( var name in props ) {
                old[ name ] = this.style[ name ];
                this.style[ name ] = props[ name ];
            }

            oldProps.push(old);
        });

        dim.width = $item.width();
        dim.outerWidth = $item.outerWidth(includeMargin);
        dim.innerWidth = $item.innerWidth();
        dim.height = $item.height();
        dim.innerHeight = $item.innerHeight();
        dim.outerHeight = $item.outerHeight(includeMargin);

        $hiddenParents.each(function(i) {
            var old = oldProps[i];
            for ( var name in props ) {
                this.style[ name ] = old[ name ];
            }
        });

        return dim;
    }
  }(jQuery));

  $(".sticky").each(function(e){
    var clonedHeaderRow = $(this);
    clonedHeaderRow
     .before(clonedHeaderRow.clone())
     .addClass("sticky-floating");
  })

  $(window)
    .scroll(updateTableHeaders)
    .trigger("scroll");
  $(window)
    .scroll(updateAside(87, 196))
    .trigger("scroll"); 
}