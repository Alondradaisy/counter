let counter = 0;

function logCounter() {
  console.log("counter: ", counter);
}

function add() {
  //console.log("running");
  counter = counter + 1;
  numberDisplay;
  logCounter();
}

function remove() {
  //console.log("running");
  counter = counter - 1;
  numberDisplay();
  logCounter();
}

const addButton = document.querySelector("#add");
addButton.addEventListener("click", add);

const removeButton = document.querySelector("#remove");
removeButton.addEventListener("click", remove);

const numberCounter = document.querySelector("#number-counter");

function numberDisplay() {
  numberCounter.innerText = counter;
}
