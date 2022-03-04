import { createAction } from "@reduxjs/toolkit";
import { createStore } from "redux";

const add = createAction("ADD");
const remove = createAction("REMOVE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case add.type:
      return [...state, { text: action.payload, id: Date.now() }];
    case remove.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);
export const toDoAction = { add, remove };

export default store;
