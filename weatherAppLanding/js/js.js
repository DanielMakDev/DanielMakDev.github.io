

var slides = document.getElementsByClassName('slide');

console.log(slides);

var btnPrev = document.getElementsByClassName('btnPrev');
var btnNext = document.getElementsByClassName('btnNext');


btnNext[0].onclick = function() {
    
    for (i=0;i < slides.length; i++) {
        if (slides[i].classList.contains('active') == true && slides[i].classList.contains('slide1') == true) {
            console.log('yeah');
                slides[i].classList.remove('active'); 
                slides[i].nextElementSibling.classList.add('active');
            return false;
        }

        else if (slides[i].classList.contains('active') == true && slides[i].classList.contains('slide2') == true) {
            slides[i].classList.remove('active'); 
            slides[i].nextElementSibling.classList.add('active');
            return false;
        }

        else if (slides[i].classList.contains('active') == true && slides[i].classList.contains('slide3') == true) {
            slides[i].classList.remove('active'); 
            slides[0].classList.add('active');
            return false;
        }
    }
};
