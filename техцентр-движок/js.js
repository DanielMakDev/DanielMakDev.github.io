
$('.cellSmall a').hover(function(){
	$(this).css('background-color', '#FCCE3A');
	$('.cellSmall a').not(this).css('z-index', '1');
	$(this).css('z-index' , '15');
	$(this).css('position' , 'relative');
	$(this).css('right' , '25px');
	$(this).css('padding', '25px 30px');
	$(this).css('font-weight', 'bold');
}, function(){
	$(this).css('background-color', '');
	$('.cellSmall a').css('z-index', '1');
	$(this).css('position' , 'static');
	$(this).css('padding', '0px');
	$(this).css('font-weight', 'normal');
		for( i=13;i<23;i++ ){
			if($(this).hasClass('R' + i)){
				$('.R'+i).css('background-color','#FFBE00');
			}
		}

});

$('.R13 , .R14 , .R15,.R16 , .R17 , .R18 , .R19 , .R20, .R22').hover(function(){


	
		for( i=13;i<23;i++ ){
			if($(this).hasClass('R' + i)){
				$('.R'+i).css('background-color','#FFBE00');
			}
		}


},function(){
	for (i=13;i<23;i++){
		$('.R'+ i).css('background-color', '#fff');
	}
});

$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$('.gallery__bottom img').hover(function(){
	
	$(this).css({
		'filter' : 'brightness(0.8)'
	});

} , function(){
	$(this).css({
		'filter' : 'brightness(1)'
	});
});



 $("header a").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top-120 + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });


 // burger menu


 var timeClick = 0;

 $('.burger').click(function() {

 	if (timeClick == 0) {
 		$('.header__top-menu').fadeIn();
 		$('.header__top-menu').css('display' , 'flex');
 		$('body').css('overflow-y' , 'hidden');
 		timeClick++;
 	}
 	else if (timeClick == 1) {
 		$('.header__top-menu').fadeOut();
 		$('body').css('overflow-y' , 'scroll');
 		timeClick--;
 	}
 	
 });

 $('.header__top-menu a').click(function(){
 	$('.header__top-menu').fadeOut();
 		$('body').css('overflow-y' , 'scroll');
 		timeClick--;
 });





// $(window).resize(function() {
//   if(document.documentElement.clientWidth > 1200) {
// var header = $('header');
// var headerHeight = $('header').height();
// console.log(headerHeight);

// $(document).ready(function() {
 
// var headerPos, winPos;
  
// function refreshVar() {
//   headerPos = $('header').offset().top;
//   headerHeight = $('header').outerHeight(true);
// }

// refreshVar();
// $(window).resize(refreshVar);

//   $('<div class="cloneHeader"></div>').insertBefore('header').css('height', headerHeight).hide();
  
// $(window).scroll(function() {
//   winPos = $(window).scrollTop();
  
//   if (winPos >= headerPos) {
//     $('header').addClass('fixed shadow');  
//     $('.cloneHeader').show();
//   }  
//   else {
//     $('header').removeClass('fixed shadow');
//     $('.cloneHeader').hide();
//   }
// });

// });
//   }
// });




 // if(document.documentElement.clientWidth > 1340) {

// этооо

 if(document.documentElement.clientWidth > 1200) {

    var header = $('header');
var headerHeight = $('header').height();
console.log(headerHeight);

$(document).ready(function() {
 
var headerPos, winPos;
  
function refreshVar() {
  headerPos = $('header').offset().top;
  headerHeight = $('header').outerHeight(true);
}

refreshVar();
$(window).resize(refreshVar);

  $('<div class="cloneHeader"></div>').insertBefore('header').css('height', headerHeight).hide();
  
$(window).scroll(function() {
  winPos = $(window).scrollTop();
  
  if (winPos >= headerPos) {
    $('header').addClass('fixed shadow');  
    $('.cloneHeader').show();
  }  
  else {
    $('header').removeClass('fixed shadow');
    $('.cloneHeader').hide();
  }
});

});
  
 }


//     var header = $('header');
// var headerHeight = $('header').height();
// console.log(headerHeight);

// $(document).ready(function() {
 
// var headerPos, winPos;
  
// function refreshVar() {
//   headerPos = $('header').offset().top;
//   headerHeight = $('header').outerHeight(true);
// }

// refreshVar();
// $(window).resize(refreshVar);

//   $('<div class="cloneHeader"></div>').insertBefore('header').css('height', headerHeight).hide();
  
// $(window).scroll(function() {
//   winPos = $(window).scrollTop();
  
//   if (winPos >= headerPos) {
//     $('header').addClass('fixed shadow');  
//     $('.cloneHeader').show();
//   }  
//   else {
//     $('header').removeClass('fixed shadow');
//     $('.cloneHeader').hide();
//   }
// });

// });




// это



  // }





// var header = $('header');
// var headerHeight = $('header').height();
// console.log(headerHeight);

// $(document).ready(function() {
 
// var headerPos, winPos;
  
// function refreshVar() {
//   headerPos = $('header').offset().top;
//   headerHeight = $('header').outerHeight(true);
// }

// refreshVar();
// $(window).resize(refreshVar);

//   $('<div class="cloneHeader"></div>').insertBefore('header').css('height', headerHeight).hide();
  
// $(window).scroll(function() {
//   winPos = $(window).scrollTop();
  
//   if (winPos >= headerPos) {
//     $('header').addClass('fixed shadow');  
//     $('.cloneHeader').show();
//   }  
//   else {
//     $('header').removeClass('fixed shadow');
//     $('.cloneHeader').hide();
//   }
// });

// });



