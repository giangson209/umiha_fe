
$(document).ready(function(){

	// $(window).scroll(function() {
       
    //    var headerH = $('.header').outerHeight(true);
    //    console.log(headerH);
    //    var scrollVal = $(this).scrollTop();
    //     if ( scrollVal > headerH ) {
    //         $('#subnav').css({'position':'fixed','top' :'0px'});
    //     } else {
    //         $('#subnav').css({'position':'static','top':'0px'});
    //     }
    // });


	var $el_1 = $(".mm-cart");
	var $ee_1 = $(".box-card-head");
	$el_1.on('click', function(e) {
		e.stopPropagation();
		$ee_1.toggleClass('active');
	});
	$(document).on('click',function(e){
		if(($(e.target) != $el_1) && ($ee_1.hasClass('active'))){
			$ee_1.removeClass('active');
		}
	});

	var $el_2 = $(".mm-product");
	var $ee_2 = $(".mega-menu");
	$el_2.on('click', function(e) {
		e.stopPropagation();
		$ee_2.toggleClass('active');
	});
	// $(document).on('click',function(e){
	// 	if(($(e.target) != $el_2) && ($ee_2.hasClass('active'))){
	// 		$ee_2.removeClass('active');
	// 	}
	// });


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
						slidesToScroll: 1,
						dots: true,
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
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
		responsive: [
			{
				breakpoint: 767,
				settings: {
					dots: true,
				}
			},
			{
				breakpoint: 575,
				settings: {
					dots: true,
				}
			},
		],
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
					dots: true,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					dots: true,
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
					slidesToScroll: 1,
					dots: true,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
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

	$('.slide-thumbs').slick({
		autoplay:false,
		arrow:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		nextArrow: '',
		prevArrow: '',
	});

	$('.slide-nav').slick({
		autoplay:false,
		arrow:true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		nextArrow: '',
		prevArrow: '',
	});

	$(".clc-mm-mega").hover(function(){
		$(this).click();
	});

	$('.clc-tab').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.clc-tab').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});

	$('.clc-prd').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.clc-prd').removeClass('active');
		$('.avr-cate').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});

	$('.clc-mm-mega').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.clc-mm-mega').removeClass('active');
		$('.tab-content-mega').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});

	$('.head-faq').click(function(){
		$(this).toggleClass('active');
		$(this).next().slideToggle(300);
	})

	$('.head-quess').click(function(){
		$(this).toggleClass('active');
		$(this).next().slideToggle(300);
	})
})

var numberSpinner = (function() {
	$('.number-spinner>.ns-btn>a').click(function() {
		var btn = $(this),
			oldValue = btn.closest('.number-spinner').find('input').val().trim(),
			newVal = 0;

		if (btn.attr('data-dir') === 'up') {
			newVal = parseInt(oldValue) + 1;
		} else {
			if (oldValue > 1) {
				newVal = parseInt(oldValue) - 1;
			} else {
				newVal = 1;
			}
		}
		btn.closest('.number-spinner').find('input').val(newVal);
	});
	$('.number-spinner>input').keypress(function(evt) {
		evt = (evt) ? evt : window.event;
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			return false;
		}
		return true;
	});
})();
