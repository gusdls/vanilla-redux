import { createAction, createReducer } from "@reduxjs/toolkit";
import { createStore } from "redux";

const add = createAction("ADD");
const remove = createAction("REMOVE");

const reducer = createReducer([], {
  [add]: (state, action) => {
    state.push({ id: Date.now(), text: action.payload });
  },
  [remove]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

const store = createStore(reducer);
export const toDoAction = { add, remove };

export default store;
