const myLabel = document.getElementById("myLabel");
const btnIncrease = document.getElementById("btnIncrease");
const btnDecrease = document.getElementById("btnDecrease");
const btnReset    = document.getElementById("btnReset");
const myText      = document.getElementById("myText");

let count=0;

btnIncrease.onclick = function () {
    count++;
    myLabel.textContent=count;
   
}

btnDecrease.onclick = function () {
    count--;
    myLabel.textContent=count;
}

btnReset .onclick = function () {
    count=0;
    myLabel .textContent=count;
}

