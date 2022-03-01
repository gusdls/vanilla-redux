import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const result = document.querySelector("span");

const countModifier = (count = 0) => {
  return count;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());
