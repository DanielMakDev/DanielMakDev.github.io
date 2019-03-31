$(document).ready(function(){
  $(".slider1 .owl-carousel").owlCarousel({
  	URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

   $(".slider2 .owl-carousel").owlCarousel({
   	loop: true,
   	nav: true,
	   	responsive:{
	        0:{
	            items:2
	        },
	        600:{
	            items:4
	        },
	        1000:{
	            items:6
	        }
	    }
   });






// BURGER MENU 


var burger       = $('#burgerMenu');

var isMenuOpened = false;

burger.click(function(){

	if (isMenuOpened) {
		$('.adaptiveNav ul').slideUp();
		isMenuOpened = false;

		return false;
	}
	else {
		$('.adaptiveNav ul').slideDown();
		isMenuOpened = true;
		return false;
	}
	

	
});



//Turning up  projects description



var project1 = $('#project1');



project1.hover(function() {
  // $('.projectDescription').css({'display': 'block'});
  $('.projectDescription').css({'bottom': '0'});

    $('#project1 img').animate({'bottom': '78px'},220);

    $('#project1 .projectOverlay').fadeIn(220);
    $('#project1 .projectOverlay').css({'display': 'flex'});
    // $('#project1 .projectOverlay').animate({'background-color': 'rgba(0,18,50 , 0.8)'} , 2000);

}, function() {  
	$('.projectDescription').css({'bottom': '-103px'});
	$('#project1 img').animate({'bottom': '0'},220);
		$('#project1 .projectOverlay').fadeOut(220);
 });


var project2 = $('#project2');



project2.hover(function() {
	$('.projectDescription2').css({'bottom': '0'});
	$('#project2 img').animate({'bottom': '78px'},220);

	$('#project2 .projectOverlay').fadeIn(220);
	$('#project2 .projectOverlay').css({'display': 'flex'});
}, function() { 
	$('.projectDescription2').css({'bottom': '-103px'});
	$('#project2 img').animate({'bottom': '0'},220);
		$('#project2 .projectOverlay').fadeOut(220);

 });


var project3 = $('#project3');



project3.hover(function() {
  $('.projectDescription3').css({'bottom': '0'});
  $('#project3 img').animate({'bottom': '78px'},220);
	$('#project3 .projectOverlay').fadeIn(220);
    $('#project3 .projectOverlay').css({'display': 'flex'});
}, function() { 
 $('.projectDescription3').css({'bottom': '-103px'});
 	$('#project3 img').animate({'bottom': '0'},220); 
		$('#project3 .projectOverlay').fadeOut(220);
});


var project4 = $('#project4');


project4.hover(function() {
  $('.projectDescription4').css({'bottom': '0'});
   $('#project4 img').animate({'bottom': '78px'},220);
	$('#project4 .projectOverlay').fadeIn(220); 
    $('#project4 .projectOverlay').css({'display': 'flex'});
}, function() {  
	$('.projectDescription4').css({'bottom': '-103px'});
		$('#project4 img').animate({'bottom': '0'},220); 
		$('#project4 .projectOverlay').fadeOut(220);
});









// Images popup

	var project1 = $('#project1');

	var project1Button = $('#project1Button');

	var project1Img = $('#project1 img');

	var overlay = $('#overlay');

	project1Button.click(function(){

	 overlay.css({'display': 'block'});

	 project1.css({
	 	'position': 'fixed',
	 	'top': '0',
	 	'left': '0',
	 	 'zIndex': '99',
	 	'backgroundColor' : 'rgba(0,0,0 , 0.7)'
	 });


		project1.animate({
	 		'padding-top': '20px',
	 		'width': '100%',
	 		'height': '100%'
		}, 450);

		project1Img.css({
	 		'width': 'auto',
	 		'max-width': '100%',
	 		'height': 'auto'
		});


		return false;
	});

	overlay.click(function(){
		overlay.css({'display': 'none'});

		project1.css({
	  		'padding': '0',
	  		'background' : 'none !important',
	 		'position': '',
	 		'top': '0',
	 		'left': '0',
	 		'width': 'auto',
	 		'height': 'auto',
	 		'zIndex': '0',

	 	});

	   project1Img.css({
	   		'width': '100%',
	   		'max-width': 'auto',
			'height': 'auto',
	   });

	});


	var project2 = $('#project2');

	var project2Button = $('#project2Button');

	var project2Img = $('#project2 img');

	var overlay = $('#overlay');

	project2Button.click(function(){

	 overlay.css({'display': 'block'});

	 project2.css({
	 	'position': 'fixed',
	 	'top': '0',
	 	'left': '0',
	 	 'zIndex': '99',
	 	'backgroundColor' : 'rgba(0,0,0 , 0.7)'
	 });


		project2.animate({
	 		'padding-top': '20px',
	 		'width': '100%',
	 		'height': '100%'
		}, 450);

		project2Img.css({
	 		'width': 'auto',
	 		'max-width': '100%',
	 		'height': 'auto'
		});

				return false;



	});

	overlay.click(function(){
		overlay.css({'display': 'none'});

		project2.css({
	  		'padding': '0',
	  		'background' : 'none !important',
	 		'position': '',
	 		'top': '0',
	 		'left': '0',
	 		'width': 'auto',
	 		'height': 'auto',
	 		'zIndex': '0',

	 	});

	   project2Img.css({
	   		'width': '100%',
	   		'max-width': 'auto',
			'height': 'auto',
	   });

	});



	var project3 = $('#project3');

	var project3Button = $('#project3Button');

	var project3Img = $('#project3 img');

	var overlay = $('#overlay');

	project3Button.click(function(){

	 overlay.css({'display': 'block'});

	 project3.css({
	 	'position': 'fixed',
	 	'top': '0',
	 	'left': '0',
	 	 'zIndex': '99',
	 	'backgroundColor' : 'rgba(0,0,0 , 0.7)'
	 });


		project3.animate({
	 		'padding-top': '20px',
	 		'width': '100%',
	 		'height': '100%'
		}, 450);

		project3Img.css({
	 		'width': 'auto',
	 		'max-width': '100%',
	 		'height': 'auto'
		});

		return false;

	});

	overlay.click(function(){
		overlay.css({'display': 'none'});

		project3.css({
	  		'padding': '0',
	  		'background' : 'none !important',
	 		'position': '',
	 		'top': '0',
	 		'left': '0',
	 		'width': 'auto',
	 		'height': 'auto',
	 		'zIndex': '0',

	 	});

	   project3Img.css({
	   		'width': '100%',
	   		'max-width': 'auto',
			'height': 'auto',
	   });

	});




	var project4 = $('#project4');

	var project4Button = $('#project4Button');

	var project4Img = $('#project4 img');

	var overlay = $('#overlay');

	project4Button.click(function(){

	 overlay.css({'display': 'block'});

	 project4.css({
	 	'position': 'fixed',
	 	'top': '0',
	 	'left': '0',
	 	 'zIndex': '99',
	 	'backgroundColor' : 'rgba(0,0,0 , 0.7)'
	 });


		project4.animate({
	 		'padding-top': '20px',
	 		'width': '100%',
	 		'height': '100%'
		}, 450);

		project4Img.css({
	 		'width': 'auto',
	 		'max-width': '100%',
	 		'height': 'auto'
		});

		return false;


	});

	overlay.click(function(){
		overlay.css({'display': 'none'});

		project4.css({
	  		'padding': '0',
	  		'background' : 'none !important',
	 		'position': '',
	 		'top': '0',
	 		'left': '0',
	 		'width': 'auto',
	 		'height': 'auto',
	 		'zIndex': '0',

	 	});

	   project4Img.css({
	   		'width': '100%',
	   		'max-width': 'auto',
			'height': 'auto',
	   });

	});










$('.toggle').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);

     $('.accordion a.toggle').css({'background-color': '#fff'});
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);

    } else {
    	// console.log($this);
    	// console.log($this.parent());
    	// console.log($this.parent().parent());
    	// console.log($this.next());
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
        $this.css({'background-color': '#FFD626'});
    }
});

















});







