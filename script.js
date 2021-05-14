// DOM objects

const button = document.getElementById('run');
const counter = document.getElementById('count');
const button1 = document.getElementById('multi-btn');
const multiplierCost = document.getElementById('multi-cost');
const autoClickBtn = document.getElementById('auto-click');
const message = document.getElementById('msg');
const changNum = document.getElementById('changeNum');
const autoClick = document.getElementById('auto-price');
const bonusBtn = document.getElementById('bonus');
const bonus = document.getElementById('bonusCost');
const bonusTime = document.getElementById('bonusTime');
let count = 0;
let multiplier = 2;
let increaseByOne = 1;
let multipCost = 10;
let num = 1;
let autoClickCost = 20;
let bonusCost = 50;


// click button when you click the cookie the score will increase by 1
button.addEventListener("click", () => {
        count += increaseByOne;
        counter.innerHTML = count;

});


// second button that make the score increase the value of the score
button1.addEventListener('click',  () => {
        increaseByOne += 1;
    if (count >= multipCost) {
        count += increaseByOne;
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
// bonus button increase the score 200% for 30 seconds


bonusBtn.addEventListener('click', () => {
if (count > 50) {
    count = count - bonusCost;
    bonusCost = bonusCost * multiplier;
    bonus.innerHTML = bonusCost;
    let time = 30;
    let timeRemain = setInterval(myTimer, 1000);
     function myTimer () {
         if (time <= 30) {
             count = increaseByOne * 200;
             bonusTime.innerHTML = time;
             time--;
         } else if (time <= -1) {
             clearInterval(timeRemain);
             bonusTime.innerHTML = 'no time left';
         }
     }
}

})
