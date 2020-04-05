var score = 0; 
var statusGame = 0;
nextBox(statusGame);

function startGame(n){
    nextBox(statusGame=n);
}

function nextBox(index){
    var i;
    var gameBox = document.getElementsByClassName("game_box");
    for (i = 0; i < gameBox.length; i++) {
        gameBox[i].style.display = "none";  
    }
    gameBox[index].style.display="flex";
}




var n = 0;
var c = 0;
poointsScors(n,c);

function pointStatus(n,c){
    poointsScors(n,c);}


function poointsScors(n,c){
    score = score+n;
    console.log(score);
    var i;
    var change = document.getElementsByClassName("start_test");
    var com = document.getElementsByClassName("comment");
    for(i=0; i < change.length; i++){
        change[i].style.display="none";
    }
    for(i=0; i < com.length; i++){
        com[i].style.display="none";
    }
        console.log("до : "+c);
        change[c].style.display="flex";
        change[c+1].style.display="none";
       
       if(c==1){
        change[0].style.display="none";
        change[1].style.display="flex";
        change[2].style.display="flex";
        com[0].style.display="flex";
       }else if(c==2){
            change[2].style.display="none";
            change[3].style.display="flex";
            change[4].style.display="flex";
            com[1].style.display="flex";
        }else if(c==3){
            change[4].style.display="none";
            change[5].style.display="flex";
            change[6].style.display="flex";
            com[2].style.display="flex";
        }else if(c==4){
            
            change[7].style.display="flex";
            change[6].style.display="none";
            change[8].style.display="flex";
            com[3].style.display="flex";
        }else if(c==5){
            
            change[8].style.display="none";
            change[9].style.display="flex";
            change[10].style.display="flex";
            com[4].style.display="flex";
        }
        else if(c==6){
            
            change[10].style.display="none";
            change[11].style.display="flex";
            change[12].style.display="flex";
            com[5].style.display="flex";
            
        }
        else if(c==7){
            com[6].style.display="flex";
            change[12].style.display="none";
            change[13].style.display="flex";
            change[14].style.display="flex";
        }
        else if(c==8){
            com[7].style.display="flex";
            change[14].style.display="none";
            change[15].style.display="flex";
            change[16].style.display="flex";
        }
        else if(c==9){
            com[8].style.display="flex";
            change[16].style.display="none";
            change[17].style.display="flex";
            if(score>=60 && score<=90){
                document.getElementById("result").innerHTML = "ваши представления о прошлом отличаются наивностью и оптимизмом. Возможно, вам стоит повнимательнее почитать информацию на нашем сайте и пообщаться со своими пожилыми родственниками.";
            }
            else if(score>=25 && score<=55){
                document.getElementById("result").innerHTML = "вы очень хорошо ориентируетесь в реалиях жизни спецпоселения!";
            }
            else if(score<=20){
                document.getElementById("result").innerHTML = "чем ниже ваш балл (особенно, чем ниже нуля), тем негативнее ваше представление о прошлом. Но истина всегда где-то посередине.";
            }
        }
        document.getElementById("result1").innerHTML = score;
        c++;
        console.log("после : "+c);
}