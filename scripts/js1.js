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
 

 var spravka = 1;
 showSpravka(spravka);
 
 function spvk(x){
   showSpravka(spravka += x);
 }

 function showSpravka(x){
   console.log(" logs : "+x);
   var item = document.getElementsByClassName("trudSS");
   var left = document.getElementsByClassName("slider_trudSS_Left");
   var right = document.getElementsByClassName("slider_trudSS_Right"); 


   for (let index = 0; index < item.length; index++) {
        item[index].style.display="none";
   }
   console.log(" items : "+item.length);
   if(x==1){
    left[0].style.display="none"
  }
  else{
    left[0].style.display="block"
  }
  if(x==item.length){
    right[0].style.display="none";
  }
  else{
    right[0].style.display="block";
  }

   if (x > item.length) {spravka = item.length;}
   if (x < 1) {spravka = 1;}
   item[spravka-1].className += " animated fadeIn";  
   item[spravka-1].style.display="block"; 
   

 }