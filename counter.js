  let counter = 0;
let maleCount = 0; 
let femalecount = 0;

const counterValue = document.getElementById("counter-value");
const maleButton = document.getElementById("male-btn");
const femaleButton = document.getElementById("female-btn");
const maleCountDisplay = document.getElementById("male-count");
const decrementButton = document.getElementById("decrement-btn");
const resetButton = document.getElementById("reset-btn");
const  femaleCountDisplay = document.getElementById('female-count');
const totalCountDisplay = document.getElementById("total-present");

maleButton.addEventListener("click", () => {
  counter++;
  maleCount++;
  counterValue.innerHTML = counter;
  maleCountDisplay.innerHTML= maleCount;
  totalCountDisplay.innerHTML = counter;
});

// Increment counter for "Female" button
femaleButton.addEventListener("click", () => {
  counter++;
  femalecount++;
  counterValue.innerHTML = counter;
  femaleCountDisplay.innerHTML = femalecount;
  totalCountDisplay.innerHTML = counter;
});

decrementButton.addEventListener("click", () => {
  counter--;
  maleCount--;
  femalecount--;
  counterValue.innerHTML = counter;
  maleCountDisplay.innerHTML = counter;
});

resetButton.addEventListener("click", () => {
  counter = 0;
  maleCount = 0;
  femalecount = 0;
  counterValue.innerHTML = counter;
  maleCountDisplay.innerHTML = maleCount;
  femaleCountDisplay.innerHTML = femalecount;
  totalCountDisplay.innerHTML = femalecount;
});

document.getElementById('dark-them').addEventListener('click', myfunction);

function myfunction(){
    document.body.style.backgroundColor = "#1E3E62";
    document.getElementById('app').style.color = "white";
    document.getElementById('para').style.color = "white";
    document.getElementById('para1').style.color = "white";
    document.getElementById('para2').style.color = "white";

}
