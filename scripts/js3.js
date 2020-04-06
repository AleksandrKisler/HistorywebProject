var slideIndex_2 = 1;
  showSlides_2(slideIndex_2);

function plusSlides_2(n) {
  showSlides_2(slideIndex_2 += n);
}

function currentSlide_2(n) {
  showSlides_2(slideIndex_2 = n);
}




function showSlides_2(n) {
  var i;
  var slides = document.getElementsByClassName("box_image_peper");
  var dots = document.getElementsByClassName("dot_2");
  if (n > slides.length) {slideIndex_2 = slides.length;}
  if (n < 1) {slideIndex_2 = 1;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex_2-1].style.display = "block";
  slides[slideIndex_2-1].className += " animated fadeIn";   
  dots[slideIndex_2-1].className += " active";
}

var ModelButton_h =document.getElementsByClassName("button_forNAseleniaMap");
var ModelWindow_h = document.getElementById("modalWindowForPopulationMap");
var close_h=document.getElementsByClassName("modelWindowForPopulationMapClose");

function openWindowPopulationMap(){
    ModelWindow_h.style.display="block";
}

function closePopulationMap(){
  ModelWindow_h.style.display="none";
}
