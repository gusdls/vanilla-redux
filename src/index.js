const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const result = document.querySelector("span");

let count = 0;
result.innerText = count;

function updateResult() {
  result.innerText = count;
}

plus.addEventListener("click", () => {
  count++;
  updateResult();
});

minus.addEventListener("click", () => {
  count--;
  updateResult();
});
