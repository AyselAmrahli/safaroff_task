//-- Aysel Amrahli
//-- ayselamrahli@gmail.com
//-- github.com/AyselAmrahli

$('#top-header').appear(function(){
	$('.logo').addClass('animated fadeInDown');
	$('.safaroff-slogan').addClass('animated fadeInUp');
});


$('.counter').each(function() {
	$(this).appear(function() {
		var number = $(this).find('.counter-timer').attr('data-to');
		$(this).find('.counter-timer').countTo({from: 0, to: number, speed: 1500, refreshInterval: 30});
	});
});

 $('.portfolio-slider').owlCarousel({
 	    items: 1,
 	    dots: false,
 	    nav:true,
 	    loop:true,
 	    navText : ["<i class='fa fa-angle-left fa-4x'></i>","<i class='fa fa-angle-right fa-4x'></i>"],
 });

// show item script
$('.load-item').on('click',function(){
	var $hidden_item = $('#brand-section').find('.hidden-item');
	$hidden_item.fadeToggle();
		$('.less').fadeToggle(function(){
			$('.more').fadeToggle();
		})
})