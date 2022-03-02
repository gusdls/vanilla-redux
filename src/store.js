import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export class AddToDo {
  constructor(text) {
    this.type = ADD;
    this.text = text;
  }
}

export class DeleteToDo {
  constructor(id) {
    this.type = DELETE;
    this.id = id;
  }
}

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
