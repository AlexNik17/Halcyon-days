$('.slick-slider').slick({
	autoplay: true,
	autoplaySpeed: 7000,
	dots: true,
	arrows: false,
	fade: true
});

$(function() {

	$('.menuToggle').on('click', function() {

		$('.main_menu-list').slideToggle(300, function() {

			if($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}

		});

	});

});

// Scroll anchor
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(el).offset().top
      }, 1500);
        return false;
        });