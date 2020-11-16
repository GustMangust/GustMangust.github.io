var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("pet");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}




var last;
var counter=0;
$(function() {
    
    $(".list__link").on('click', function() {
        
        if(counter==0)
        {  
            last = $(this);
            $(".list__link").css('text-decoration', 'none');
            $(this).css('border-bottom', 'solid 3px #f1cdb3');
            counter++;
        }
        else
        {
            last.css('border-bottom','0px');
            $(".list__link").css('text-decoration', 'none');
            $(this).css('border-bottom', 'solid 3px #f1cdb3');
            last = $(this);
        }
    });
});