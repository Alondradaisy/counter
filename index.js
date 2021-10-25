const domContainer = document.getElementById("root");
const addIt = React.createElement(
  "button",
  { onClick: add, disabled: true },
  "add"
);
const removeIt = React.createElement("button", null, "remove");

const h2 = React.createElement("");

const counterH1React = React.createElement("h1", null, "0");

const counterContainer = React.createElement("div", null, [
  removeIt,
  counterH1React,
  addIt,
]);

ReactDOM.render(h1Element, domContainer);
