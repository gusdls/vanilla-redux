import { connect } from "react-redux";
import { toDoAction } from "../store";

function ToDo({ text, deleteToDo }) {
  return (
    <li>
      <span>{text}</span>
      <button onClick={deleteToDo}>❌</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, { id }) => ({
  deleteToDo: () => dispatch(toDoAction.delete(id)),
});

export default connect(null, mapDispatchToProps)(ToDo);
