import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const result = document.querySelector("span");

const countModifier = (count = 0, { type }) => {
  if (type === "PLUS") {
    return count + 1;
  } else if (type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "PLUS" });
console.log(countStore.getState());
