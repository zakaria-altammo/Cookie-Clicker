// DOM objects
const button = document.getElementById('run');
const counter = document.getElementById('count');
let count = 0;
const button1 = document.getElementById('run1');


// click button when you click the cookie the score will increase by 1
button.addEventListener("click", () => {

        counter.innerHTML = ++count;

});


// second button that make the score increase by 2
button1.addEventListener('click', () => {

})