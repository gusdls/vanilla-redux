import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ getToDo }) {
  const { id } = useParams();
  const toDo = getToDo(id);
  return (
    <>
      <h1>{toDo.text}</h1>
      <h4>Created at {toDo.id}</h4>
    </>
  );
}

const mapStateToProps = (toDos) => ({
  getToDo: (id) => toDos.find((toDo) => toDo.id === parseInt(id)),
});

export default connect(mapStateToProps)(Detail);
