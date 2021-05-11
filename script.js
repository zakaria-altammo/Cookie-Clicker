// DOM objects
const button = document.getElementById('run');
let count = 0;
const counter = document.getElementById('count');
const button1 = document.getElementById('multi-btn');
let multiplier = 2;
let multipCost = 20;
const multiplierCost = document.getElementById('multi-cost');
const autoClickBtn = document.getElementById('auto-click');
let autoClick = 1;




// click button when you click the cookie the score will increase by 1
button.addEventListener("click", () => {
        count += 1;
        counter.innerHTML = count;

});


// second button that make the score increase by 2
button1.addEventListener('click',  () => {

    if (count >= multipCost) {
        count = count - multipCost;
        count = count * 2;
        multipCost = multipCost * multiplier;
        multiplierCost.innerHTML = multipCost;
        counter.innerHTML = count;

    }

});
// auto clicker
autoClickBtn.addEventListener('click', () => {

});

