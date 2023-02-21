
$(document).ready(function(){

	$(".bar-menu a").on('click', function(e){
		e.preventDefault();
		$(".bar-menu, .close-menu, .sidebar").addClass('active');
	});
	$(".close-menu a").on('click', function(e){
		e.preventDefault();
		$(".bar-menu, .close-menu, .sidebar").removeClass('active');
	});

	// if($(window).innerWidth() < 1024){})

	$('.slide-under').slick({
		autoplay:true,
		arrow:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		nextArrow: '',
		prevArrow: '',
	});

	$('.slide-banner-prw').slick({
		autoplay:true,
		arrow:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		nextArrow: '',
		prevArrow: '',
	});

	$('.clc-tab').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.clc-tab').removeClass('active');
		$('.tab-table').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

	$('.clc-date').click(function(){
		$('#dp-island').toggleClass('active');
		$('.date-time-luycky dd').hide();
	})
	$('.date-time-luycky dt').click(function(){
		$('#dp-island').removeClass('active');
	})


	var dropdowns = $(".dropdown");
	$('.dropdown dd').hide();
	dropdowns.find("dt").click(function(){
		// dropdowns.find("dd").hide();
		$(this).next().toggle();
	});
	dropdowns.find("dd ul li a").click(function(){
		var leSpan = $(this).parents(".dropdown").find("dt a span");
		$(this).parents(".dropdown").find('dd a').each(function(){
			$(this).removeClass('selected');
		});
		leSpan.html($(this).html());
		if($(this).hasClass('default')){
			leSpan.removeClass('selected')
		}
		else{
			leSpan.addClass('selected');
			$(this).addClass('selected');
		}
		$(this).parents("dd").hide();
	});
	$(document).bind('click', function(e){
		if (! $(e.target).parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
	});

		// ------------  File upload BEGIN ------------

	$(".file__remove--label").hide();
	$('.file__input--file').on('change',function(event){
		var files = event.target.files;
		for (var i = 0; i < files.length; i++) {
			var file = files[i];
			$("<div class='file__value'><div class='file__value--text'>" + file.name + "</div><div class='file__value--remove' data-id='" + file.name + "' ></div></div>").insertAfter('#file__input');
			$(".file__remove--label").show();
		}
	});

	//Click to remove item
	$('body').on('click', '.file__value', function() {
		$(this).remove();
	});

	$(".file__remove--label").on('click', function(e){
		e.preventDefault();
		$('.file__value').remove();
		$(this).hide();
	});
	// ------------ File upload END ------------

	ImgUpload();

	function ImgUpload() {
		var imgWrap = "";
		var imgArray = [];

		$('.upload__inputfile').each(function () {
			$(this).on('change', function (e) {
				imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
				var maxLength = $(this).attr('data-max_length');

				var files = e.target.files;
				var filesArr = Array.prototype.slice.call(files);
				var iterator = 0;
				filesArr.forEach(function (f, index) {

					if (!f.type.match('image.*')) {
						return;
					}

					if (imgArray.length > maxLength) {
						return false
					} else {
						var len = 0;
						for (var i = 0; i < imgArray.length; i++) {
							if (imgArray[i] !== undefined) {
								len++;
							}
						}
						if (len > maxLength) {
							return false;
						} else {
							imgArray.push(f);

							var reader = new FileReader();
							reader.onload = function (e) {
								var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
								imgWrap.append(html);
								iterator++;
							}
							reader.readAsDataURL(f);
						}
					}
				});
			});
		});
		$('body').on('click', ".upload__img-close", function (e) {
			var file = $(this).parent().data("file");
			for (var i = 0; i < imgArray.length; i++) {
				if (imgArray[i].name === file) {
					imgArray.splice(i, 1);
					break;
				}
			}
			$(this).parent().parent().remove();
		});
	}



})