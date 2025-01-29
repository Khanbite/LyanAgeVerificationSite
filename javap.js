const myText = document.getElementById("myText");
const subButton = document.getElementById("subButton");
const myResult = document.getElementById("myResult");
let age;
subButton.onclick = function(){
    let age = myText.value;
    age = Number(age);
    if(age <0){
        myResult.textContent= "You cant be that young!";
    }
    else if(age <=16){
        myResult.textContent= "You are way too young!";
    }
    else if(age > 16 && age < 18){
        myResult.textContent= "You're close...";
    }
    else if(age>=100){
        myResult.textContent= "You are way too old!";
    }
    else if(age===18){
        myResult.textContent= "You are the perfect age!;)";
    }
    else{
       
    }
};
