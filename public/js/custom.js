$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$("#header").css("visibility",'visible');
		}
	});
	$('.logo_banner').slick({
	  dots: false,
	  infinite: false,
		arrows:false,
	  slidesPerRow: 3,
      rows: 3,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesPerRow: 1,
      rows: 3
      }
    }
  ]
	});
});


equalheight = function(container){
    var currentTallest = 0,
         currentRowStart = 0,
         rowDivs = new Array(),
         $el,
         topPosition = 0;
     $(container).each(function() {

       $el = $(this);
       $($el).height('auto')
       topPostion = $el.position().top;

       if (currentRowStart != topPostion) {
         for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
           rowDivs[currentDiv].height(currentTallest);
         }
         rowDivs.length = 0; // empty the array
         currentRowStart = topPostion;
         currentTallest = $el.height();
         rowDivs.push($el);
       } else {
         rowDivs.push($el);
         currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
      }
       for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
         rowDivs[currentDiv].height(currentTallest);
       }
     });
}

$(window).load(function() {
    
  
    equalheight('.cat_div');
   
	
   });


$(window).resize(function(){	
  
	 equalheight('.cat_div');
	
});			