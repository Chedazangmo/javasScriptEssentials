let count=0;


function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function checkCountValue(){
    if (count==10){
        alert("Your Instagram post gained 10 followers! Congratulation!");

    }else if (count==20){
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }


}

function resetCount(){
   count=0;
   displayCount();
   alert("Your follwers has been reset to zero !");
}

