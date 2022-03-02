import { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  const onChange = ({ target: { value } }) => setText(value);
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };
  return (
    <>
      <h1>TO DO LIST</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
