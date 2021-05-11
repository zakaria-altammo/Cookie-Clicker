// DOM objects
let count = 0;
const button = document.getElementById('run');
const counter = document.getElementById('count');
const button1 = document.getElementById('multi-btn');
let multiplier = 2;
let increaseByOne = 1;
let multipCost = 10;
const multiplierCost = document.getElementById('multi-cost');
const autoClickBtn = document.getElementById('auto-click');
const message = document.getElementById('msg');
const changNum = document.getElementById('changeNum');
let num = 2;



// click button when you click the cookie the score will increase by 1
button.addEventListener("click", () => {
        count += increaseByOne;
        counter.innerHTML = count;

});


// second button that make the score increase the value of the score
button1.addEventListener('click',  () => {

    if (count >= multipCost) {
        increaseByOne += 1;
        count = count - multipCost;
        multipCost = multipCost * multiplier;
       multiplierCost.innerHTML = multipCost;
        counter.innerHTML = count;
        changNum.innerHTML = ++num;
    } else if (count !== multipCost) {
        message.innerHTML = "You don\'t have enough points";

    }

});
// auto clicker
autoClickBtn.addEventListener('click', () => {





});

