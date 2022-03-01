import { createStore } from "redux";

const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const onToDoSubmit = (e) => {
  e.preventDefault();
  const toDo = toDoInput.value;
  toDoInput.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};

toDoForm.addEventListener("submit", onToDoSubmit);
