import $ from 'jquery';

;(function () {	
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {
		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	var burgerMenu = function() {
		$('.js-colorlib-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});
	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
		    var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
		    if (!container.is(e.target) && container.has(e.target).length === 0) {

		    	if ( $('body').hasClass('offcanvas') ) {

	    			$('body').removeClass('offcanvas');
	    			$('.js-colorlib-nav-toggle').removeClass('active');
				
		    	}
		    	
		    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');			
	    	}
		});

	};

	var clickMenu = function() {
		$('#navbar a').click(function(){
			var	navbar = $('#navbar');

		    if (navbar.is(':visible')) {
		    	$('body').removeClass('offcanvas');
                $('.js-colorlib-nav-toggle').removeClass('active');
            }
		});
	};

	// let senData = function(){
	// 	let name = $('#contact-name').val();
	// 	let email = $('#contact-email').val();
	// 	let phone = $('#contact-phone').val();
	// 	let message = $('#message').val();

	// 	// $('#entry_1209133311').attr('value',ten);
	// 	// $('#entry_1802097178').attr('value',phone);
	// 	// $('#entry_828341090').attr('value',email);
	// 	// $('#entry_1785788962').attr('value',ma_donhang);


	// 	$.ajax({
	// 		type: 'POST',
	// 		url: '/contact',
	// 		data: $('#contact-form').serialize(),
	// 		success: function(data) {
	// 			$(document).ready(function () {
					
	// 			});
	// 		},
	// 		error: function(xhr, textStatus, errorThrown) {
	// 			alert(textStatus+': '+errorThrown);
	// 		}
	// 	});

	// 	$.ajax({
	// 		type: 'POST',
	// 		dataType: "jsonp",
	// 		url: 'https://docs.google.com/a/haravan.com/forms/d/1OvYToFXEev3jP5zZVDXom7mgiL0-hgsrYLUDBsAB1bg/formResponse',
	// 		data: $('#ss-form').serialize(),
	// 		success: function(data) {
	// 			$(document).ready(function () {
	// 				//$('#myModal').modal('show');
	// 			});
	// 		},
	// 		error: function(xhr, textStatus, errorThrown) {
	// 		}
	// 	});
	
	// }

	// Document on load.
	$(function(){
		fullHeight();
		burgerMenu();
		clickMenu();
		mobileMenuOutsideClick();
	});
}());