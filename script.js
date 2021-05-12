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
let num = 1;
let autoClickCost = 20;
const autoClick = document.getElementById('auto-price');


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
        message.innerHTML = "You don\'t have enough cookies!";
    }

});
// auto clicker it adds cookies automatically for every buy it will add more cookies
autoClickBtn.addEventListener('click', () => {
if (count >= autoClickCost){
    count = count - autoClickCost;
    autoClickCost = autoClickCost * multiplier;
    autoClick.innerHTML = autoClickCost;
    window.setInterval(function(){
        count += increaseByOne;
        counter.innerHTML = count;
        }, 1000);
} else if(count !== autoClickCost) {
    message.innerHTML = "You don\'t have enough cookies!"
}

});

