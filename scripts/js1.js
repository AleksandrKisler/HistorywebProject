let selectors = 0;
showBlock(selectors);


function choise(n){
showBlock(selectors=n);
}

function showBlock(n){
var i;
var slides = document.getElementsByClassName("select_items");
var slides_image = document.getElementsByClassName("marker");
for(i=0;i<slides.length;i++){
  slides[i].style.display="none";
  slides_image[i].style.display="none";
}

      slides[selectors].style.display="flex";
      slides_image[selectors].style.display="block";
}