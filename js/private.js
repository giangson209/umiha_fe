
$(document).ready(function(){

	if($(window).innerWidth() < 1024){
		$('.list-service .row').slick({
			autoplay:false,
			arrow:false,
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: false,
			nextArrow: '',
			prevArrow: '',
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
			],
		});
	};

	$('.slide-banner').slick({
		autoplay:true,
		arrow:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		fade: true,
		nextArrow: '<a href="javascript:void(0)" class="slick-right"><img src="images/angle-arrow-right.png" class="img-fluid" alt=""></a>',
		prevArrow: '<a href="javascript:void(0)" class="slick-left"><img src="images/angle-arrow-left.png" class="img-fluid" alt=""></a>',
	});

	$('.slide-stories').slick({
		autoplay:true,
		arrow:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		nextArrow: '<a href="javascript:void(0)" class="arr-next"><img src="images/arrow-circle-right.png" class="img-fluid" alt=""></a>',
		prevArrow: '<a href="javascript:void(0)" class="arr-prev"><img src="images/arrow-circle-left.png" class="img-fluid" alt=""></a>',
	});



	$('.slide-review').slick({
		autoplay:false,
		arrow:false,
		centerMode: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		nextArrow: '<a href="javascript:void(0)" class="arr-next"><img src="images/arrow-circle-right.png" class="img-fluid" alt=""></a>',
		prevArrow: '<a href="javascript:void(0)" class="arr-prev"><img src="images/arrow-circle-left.png" class="img-fluid" alt=""></a>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
				}
			},
		],
	});

	$('.slide-blog').slick({
		autoplay:false,
		arrow:true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		nextArrow: '<a href="javascript:void(0)" class="arr-next"><img src="images/arrow-circle-right.png" class="img-fluid" alt=""></a>',
		prevArrow: '<a href="javascript:void(0)" class="arr-prev"><img src="images/arrow-circle-left.png" class="img-fluid" alt=""></a>',
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		],
	});

	$('.slide-trip').slick({
		autoplay:false,
		arrow:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		nextArrow: '<a href="javascript:void(0)" class="slick-right"><img src="images/angle-arrow-right.png" class="img-fluid" alt=""></a>',
		prevArrow: '<a href="javascript:void(0)" class="slick-left"><img src="images/angle-arrow-left.png" class="img-fluid" alt=""></a>',
	});

	$('.clc-tab').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.clc-tab').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

	$('.clc-prd').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.clc-prd').removeClass('active');
		$('.avr-cate').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

	$('.head-faq').click(function(){
		$(this).toggleClass('active');
		$(this).next().slideToggle(300);
	})

})