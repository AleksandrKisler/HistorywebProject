let selectors = 0;
showBlock(selectors);


function choise(n){
showBlock(selectors=n);
}

function showBlock(n){
var i;
var slides = document.getElementsByClassName("select_items");
var item = document.getElementsByClassName("image_item");
var slides_image = document.getElementsByClassName("image_marker");
for(i=0;i<slides.length;i++){
  slides[i].style.display="none";
}
for(i=0;i<slides.length;i++){
    slides_image[i].style.display="none";
  }
      slides[selectors].style.display="block";
      slides_image[selectors].style.display="block";
}