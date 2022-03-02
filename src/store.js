import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const toDoAction = {
  add: (text) => ({ type: ADD, text }),
  delete: (id) => ({ type: DELETE, id }),
};

const reducer = (state = [], { type, text, id }) => {
  switch (type) {
    case ADD:
      return [...state, { text, id: Date.now() }];
    case DELETE:
      return state.filter((toDo) => toDo.id !== id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
