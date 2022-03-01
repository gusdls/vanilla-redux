import { createStore } from "redux";

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const result = document.querySelector("span");

const PLUS = "PLUS";
const MINUS = "MINUS";

const reducer = (count = 0, { type }) => {
  switch (type) {
    case PLUS:
      return ++count;
    case MINUS:
      return --count;
    default:
      return count;
  }
};

const store = createStore(reducer);
store.subscribe(() => (result.innerText = store.getState()));

increase.addEventListener("click", () => store.dispatch({ type: PLUS }));
decrease.addEventListener("click", () => store.dispatch({ type: MINUS }));
