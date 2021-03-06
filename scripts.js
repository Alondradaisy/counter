let counter = 0;

//logs the number update
const countUpdateHandler = () => {
  logCounter();
  numberDisplay();

  daisyContainerElement.innerHTML = counter;
};

//logs count
function logCounter() {
  console.log("counter: ", counter);
}

//func to add to count
function add() {
  counter = counter + 1;
  numberDisplay;
  logCounter();
  countUpdateHandler();
  if (counter >= 0) {
    daisyComponent();
  }
}

function remove() {
  counter = counter - 1;
  numberDisplay();
  logCounter();
  countUpdateHandler();
  if (counter > 0) {
    daisyComponent();
  }
}

//trigger add func when + is clicked
const addButton = document.querySelector("#add");
addButton.addEventListener("click", add);

//trigger remove func when - is clicked
const removeButton = document.querySelector("#remove");
removeButton.addEventListener("click", remove);

//declare daisyContainer from html elements
const daisyContainerElement = document.querySelector(".daisy-container");

//declare a numberCounter to track number updates
const numberCounter = document.querySelector("#number-counter");

//func to trigger the updated number in numberCounter
function numberDisplay() {
  numberCounter.innerHTML = counter;
}

//func to trigger addition of daisies matching numberCounter
function daisyComponent() {
  const section = document.querySelector(".daisy-container");
  let daisyBox = document.createElement("div");
  daisyBox.innerHTML = `
    <div class="daisy-box">
      <img src="https://img2.svgdesigns.com/printart/large/FSL_Studio/pgfsl1655.jpg">
    </div>`;
  section.appendChild(daisyBox);

  return daisyBox;
}

function deleteDaisy() {
  const section = document.querySelector(".daisy-container");
  section.removeChild(section.lastElementChild);
}
