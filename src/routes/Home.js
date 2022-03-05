import { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  const onChange = ({ target: { value } }) => setText(value);
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };
  return (
    <>
      <h1>TO DO LIST</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (toDos) => ({ toDos });

const mapDispatchToProps = (dispatch) => ({
  addToDo: (text) => dispatch(add(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
