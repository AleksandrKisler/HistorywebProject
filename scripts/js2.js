function openDocument(){
    var s = document.getElementsByClassName('spravka');
    s[0].style.height = '50vw';
    s[0].style.transition= '1.5s';

    var s1 = document.getElementsByClassName('spravkaMain');
    s1[0].style.height = '47vw';
    s1[0].style.transition= '1.5s';
    
    var img = document.getElementsByClassName('arrow_down');
    img[0].style.display = 'none';

    var img1 = document.getElementsByClassName('arrow_up');
        img1[0].style.display = "block";
}


    function closeDocument(){

       
        var s1 = document.getElementsByClassName('spravka');
        s1[0].style.height = '30vw';
        s1[0].style.transition= '1.5s';
        
        var s = document.getElementsByClassName('spravkaMain');
        s[0].style.height = '23vw';
        s[0].style.transition= '1.5s';
        
        var img = document.getElementsByClassName('arrow_down');
        img[0].style.display = 'block';
        
        var img1 = document.getElementsByClassName('arrow_up');
        img1[0].style.display = "none";
    }



 

var ModelButton =document.getElementsByClassName("");
var ModelWindow = document.getElementById("modelWindowForFishMap");
var close=document.getElementsByClassName("modelWindowForFishMapClose");

function openGame(){
    ModelWindow.style.display="block";
}

function closeGame(){
  ModelWindow.style.display="none";
}