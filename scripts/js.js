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
  if (n > slides.length) {slideIndex = slides.length;}
  if (n < 1) {slideIndex = 1;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  
  slides[slideIndex-1].style.display = "block"; 
  slides[slideIndex-1].className += " animated fadeIn";
  dots[slideIndex-1].className += " active";
}


/*----------------
SLIDER 1953
----------------*/


var slideIndex_1 = 1;
  showSlides_1(slideIndex_1);

function plusSlides_1(n) {
  showSlides_1(slideIndex_1 += n);
}

function currentSlide_1(n) {
  showSlides_1(slideIndex_1 = n);
}




function showSlides_1(n) {
  var i;
  var slides = document.getElementsByClassName("text_1");
  var dots = document.getElementsByClassName("dot_1");
  if (n > slides.length) {slideIndex_1 = slides.length;}
  if (n < 1) {slideIndex_1 = 1;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex_1-1].style.display = "block";
  slides[slideIndex_1-1].className += " animated fadeIn";  
  dots[slideIndex_1-1].className += " active";
}

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
  var slides = document.getElementsByClassName("text_2");
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



/*modal window for Book*/

var ModelButton_b =document.getElementsByClassName("button_forBook");
var ModelWindow_b = document.getElementById("myModal2");
var close_b=document.getElementsByClassName("p_close");

function openWindowBook(){
    ModelWindow_b.style.display="block";
}

function closeBook(){
  ModelWindow_b.style.display="none";
}

function s(){
  console.log(1);
}



function selectVidioBox(){
  console.log("hello");
}