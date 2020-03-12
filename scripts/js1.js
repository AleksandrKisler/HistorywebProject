let selectors = 0;
showBlock(selectors);


function choise(n){
showBlock(selectors=n);
}

function showBlock(n){
var i;
var slides = document.getElementsByClassName("select_items");
var slides_image = document.getElementsByClassName("marker");
var h = document.getElementsByClassName("titleSpecP");
if(n==0){
  h[n].style.textAlign="left";
  h[n].className += " animated fadeIn";
}
if(n==1){
  h[n].style.textAlign="center";
  h[n].className += " animated fadeIn";
}
if(n==2){
  h[n].style.textAlign="right";
  h[n].className += " animated fadeIn";
}
for(i=0;i<slides.length;i++){
  slides_image[i].style.display="none";
  slides[i].style.display="none";
}
      slides[selectors].className += " animated fadeIn";
      slides[selectors].style.display="flex";
      slides_image[selectors].style.display="block";
      
}


let text = 1;
showBlock_1(text);

function rulec(n){
showBlock_1(text+=n);
}

function showBlock_1(n){
var i;
var l = document.getElementsByClassName("buttomRight");
var r = document.getElementsByClassName("buttomLeft");
var slides = document.getElementsByClassName("sparavkaText");
if (n > slides.length) {text = slides.length;}
if(n==slides.length){
  l[0].style.display="none"
}
else{
  l[0].style.display="block"
}
if(n==1){
  r[0].style.display="none";
}
else{
  r[0].style.display="block";
}
if (n < 1) {text = 1;}
for(i=0;i<slides.length;i++){
  slides[i].style.display="none";
}
      slides[text-1].className += " animated fadeIn";  
      slides[text-1].style.display="block"; 
}
     