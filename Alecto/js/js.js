 // Made by DanielMakDev 
 // https://github.com/DanielMakDev 
 // https://vk.com/danielmakdev 
 // danielmakdev@gmail.com

$(document).ready(function() {


// slider 


$('.slider').slick({
	nextArrow: $('.rightArrow'),
	prevArrow: $('.leftArrow'),
	autoplay:true
});


$('.slider2').slick({
	nextArrow: $('.rightArrow2'),
	prevArrow: $('.leftArrow2')
});


// slider 


$('.homeA').on('click' , function() {
	 $('html,body').animate({scrollTop:($('header').offset().top)+"px"},{duration:1E3});
});

$('.aboutA').on('click' , function() {
	 $('html,body').animate({scrollTop:($('.aboutUs').offset().top+72)+"px"},{duration:1E3});
});

$('.workA').on('click' , function() {
	 $('html,body').animate({scrollTop:($('.loremIpsum').offset().top-50)+"px"},{duration:1E3});
});

$('.servicesA').on('click' , function() {
	 $('html,body').animate({scrollTop:($('.services').offset().top-93)+"px"},{duration:1E3});
});

$('.blogA').on('click' , function() {
	 $('html,body').animate({scrollTop:($('.team').offset().top-50)+"px"},{duration:1E3});
});



$('.homeA2').on('click' , function() {
	 $('html,body').animate({scrollTop:($('header').offset().top)+"px"},{duration:1E3});
	 $('.menu-open , .linksAdaptive').fadeOut();
				$('.menu-open').css('display' , 'none !important').toggleClass('menu-open');;
				$('body').css('overflow' , 'auto');
				time++;
});

$('.aboutA2').on('click' , function() {
	 $('html,body').animate({scrollTop:($('.aboutUs').offset().top+72)+"px"},{duration:1E3});
	 $('.menu-open , .linksAdaptive').fadeOut();
				$('.menu-open').css('display' , 'none !important').toggleClass('menu-open');;
				$('body').css('overflow' , 'auto');
				time++;
});

$('.workA2').on('click' , function() {
	 $('html,body').animate({scrollTop:($('.loremIpsum').offset().top-50)+"px"},{duration:1E3});
	 $('.menu-open , .linksAdaptive').fadeOut();
				$('.menu-open').css('display' , 'none !important').toggleClass('menu-open');;
				$('body').css('overflow' , 'auto');
				time++;
});

$('.servicesA2').on('click' , function() {
	 $('html,body').animate({scrollTop:($('.services').offset().top-93)+"px"},{duration:1E3});
	 $('.menu-open , .linksAdaptive').fadeOut();
				$('.menu-open').css('display' , 'none !important').toggleClass('menu-open');;
				$('body').css('overflow' , 'auto');
				time++;
});

$('.blogA2').on('click' , function() {
	 $('html,body').animate({scrollTop:($('.team').offset().top-50)+"px"},{duration:1E3});
	 $('.menu-open , .linksAdaptive').fadeOut();
				$('.menu-open').css('display' , 'none !important').toggleClass('menu-open');;
				$('body').css('overflow' , 'auto');
				time++;
});


$('.downArrow').on('click', function() {
  $('html,body').animate({scrollTop:($('.aboutUs').offset().top+72)+"px"},{duration:1E3});
});

	var time = 0;
	var $nav = $('.nav1');

	var navPos 	  = $('.nav1').offset().top;
		navHeight = $('.nav1').outerHeight(true);

		$('<div class="clone"></div>').css('height' , navHeight).insertBefore('.nav1').hide();

 // Made by DanielMakDev 
 // https://github.com/DanielMakDev 
 // https://vk.com/danielmakdev 
 // danielmakdev@gmail.com

	$('.burger').on('click', function() {
			console.log(time);
			if (time == 0){
				$('.linksAdaptive').toggleClass('menu-open');
				$('.menu-open').slideDown(500);
				$('.menu-open').css('display' , 'flex');
				$('body').css('overflow' , 'hidden');
				
			
			}

			if (time == 1) {
				$('.menu-open , .linksAdaptive').fadeOut();
				$('.menu-open').css('display' , 'none !important').toggleClass('menu-open');;
				$('body').css('overflow' , 'auto');
				
				
			}
			if (time == 2) {
				$('.linksAdaptive').toggleClass('menu-open');
				$('.menu-open').slideDown(500);
				$('body').css('overflow' , 'hidden');
				time = 0;
			}
			time++;

			// $('.linksAdaptive').toggleClass('menu-open');
			// $('.menu-open').fadeIn();
			// $('.menu-open').css('display' , 'flex');
		});


		var time2 = 0;
	
	$(window).scroll(function() {


 // Made by DanielMakDev 
 // https://github.com/DanielMakDev 
 // https://vk.com/danielmakdev 
 // danielmakdev@gmail.com	

		

		
		if ($(window).width() > 1015) {

			if (time2 === 0) {
				$nav.fadeOut(0);
				time2++;
				console.log(time2);
			}
			


			 if ($(window).scrollTop() >= 1 ) {

				$nav.css({
					'position':'fixed ',
					'top':'0 ',
					'left':'0',
					'width':' 80% ',
					'padding':'0 180px',
					'color':'#17DAA3',
					'background-color':'rgba(23,218,163 , 0.9)',
					'z-index' :'1000'
				});
				if (time2 === 1) {
					$nav.fadeIn(300);
					time2++;
				}

 // Made by DanielMakDev 
 // https://github.com/DanielMakDev 
 // https://vk.com/danielmakdev 
 // danielmakdev@gmail.com
			
			
			$('.nav1 a').addClass('colorA');
			$('.nav1 i').addClass('colorA');
			$('.clone').css({
				'position':'absolute',
				'top':'0px',
				'height': navHeight
			});
			$('.clone').show();
			
			

		}
		else  if ($(window).scrollTop() == 0 ) {
			
			$('.nav1 a').removeClass('colorA');
			$('.nav1 i').removeClass('colorA');

			$nav.css({
				'position':'absolute !important',
				'top':'0',
				
				'padding':'0 180px',
				'color':'',
				'background':'none',
				'z-index' :'1000'
			});
			$('.clone').hide();
		
			
			
		}
		}
		

	});
	
 // Made by DanielMakDev 
 // https://github.com/DanielMakDev 
 // https://vk.com/danielmakdev 
 // danielmakdev@gmail.com

});
