import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toDoAction } from "../store";

function ToDo({ text, id, deleteToDo }) {
  return (
    <li>
      <Link to={id.toString()}>{text}</Link>
      <button onClick={deleteToDo}>❌</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, { id }) => ({
  deleteToDo: () => dispatch(toDoAction.remove(id)),
});

export default connect(null, mapDispatchToProps)(ToDo);
