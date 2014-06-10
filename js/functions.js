$(document).ready(function() {

				//$('.fancybox').fancybox();
				$(".fancybox").fancybox({
					wrapCSS    : 'fancybox-custom',
					closeClick : true,
	
					openEffect : 'none',
	
					helpers : {
						title : {
							type : 'inside'
						},
						overlay : {
							css : {
								'background' : 'rgba(238,238,238,0.85)'
							}
						}
					}
				});
				
});
