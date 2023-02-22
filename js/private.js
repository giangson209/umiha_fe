
$(document).ready(function(){

	// if($(window).innerWidth() < 1024){})

	$('.slide-banner').slick({
		autoplay:true,
		arrow:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		nextArrow: '',
		prevArrow: '',
	});

	$('.slide-stories').slick({
		autoplay:true,
		arrow:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		nextArrow: '',
		prevArrow: '',
	});

	$('.slide-prd-hot').slick({
		autoplay:true,
		arrow:false,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		nextArrow: '',
		prevArrow: '',
	});

	$('.slide-review').slick({
		autoplay:true,
		arrow:false,
		// centerMode: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		nextArrow: '',
		prevArrow: '',
	});

	$('.slide-blog').slick({
		autoplay:true,
		arrow:false,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		nextArrow: '',
		prevArrow: '',
	});

})