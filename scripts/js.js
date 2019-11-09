var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("text");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



/*modal window for fish map*/

var ModelButton_f =document.getElementsByClassName("button_fishMap");
var ModelWindow_f = document.getElementById("myModal");
var close_f=document.getElementsByClassName("close");

function openWindowFishMap(){
    ModelWindow_f.style.display="block";
}

function closeFishMap(){
  ModelWindow_f.style.display="none";
}


/*modal window for population map*/

var ModelButton_h =document.getElementsByClassName("button_forNAseleniaMap");
var ModelWindow_h = document.getElementById("myModal1");
var close_h=document.getElementsByClassName("p_close");

function openWindowPopulationMap(){
    ModelWindow_h.style.display="block";
}

function closePopulationMap(){
  ModelWindow_h.style.display="none";
}

function s(){
  console.log(1);
}