let topButton;
let slideIndex = 0;
$(document).ready(function(){
    $('.center').slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        initialSlide: 1
    });
    showSlides();

    topButton = document.getElementById("top-btn");
    window.onscroll = function() {scrollFunction()};
});

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000);
}


function scrollFunction() {
    console.log("scroll function");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}