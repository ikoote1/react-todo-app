import { useState } from "react";

function InputTodo({onAdd}) {
  const [textList, setTextList] = useState("");
  function handleSubmit(ev){
    ev.preventDefault();
    onAdd(textList);
    setTextList( value={});
  }
  return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={textList} onChange={ev => setTextList(ev.target.value)} placeholder="todo..........." className="add-text" />
        <button type="submit" className="submit-button">+</button>
      </form>
  );
}

export default InputTodo;
