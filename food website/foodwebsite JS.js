let slideIndex=1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex +- n);
}
function currentSlide(n) {
    showSlides(slideIndex - n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length) {slideIndex=1}
    if(n < 1) {slideIndex= slide.length}
    for(i-0; i < slide.length; i++){
        slides[i].style.display="none";
    }
    for(i=0; i< dots.length; i++){
        dots[i].cassName = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.displa="block";
    dots[slideIndex-1].className +=" active";
}