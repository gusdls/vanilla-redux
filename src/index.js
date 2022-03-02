import { createStore } from "redux";

const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => store.dispatch({ type: ADD_TODO, text });
const deleteToDo = (id) => store.dispatch({ type: DELETE_TODO, id });

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [...state, newToDoObj];
    case DELETE_TODO:
      const cleanedToDos = state.filter((toDo) => toDo.id !== action.id);
      return cleanedToDos;
    default:
      return state;
  }
};

const store = createStore(reducer);

const paintToDos = () => {
  const toDos = store.getState();
  toDoList.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    li.id = toDo.id;
    const span = document.createElement("span");
    span.innerText = toDo.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", () => deleteToDo(toDo.id));
    li.append(span, btn);
    toDoList.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onToDoSubmit = (e) => {
  e.preventDefault();
  const toDo = toDoInput.value;
  toDoInput.value = "";
  addToDo(toDo);
};

toDoForm.addEventListener("submit", onToDoSubmit);
