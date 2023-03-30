import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputToDo';
import TodosList from './TodosList';
import Storage from '../storage';

const storage = new Storage();

export default function TodosLogic() {
  const [todos, setTodos] = useState(storage.getLocalStorage);

  useEffect(() => {
    storage.updateLocalStorage(todos);
  }, [todos]);

  const handelCheckBox = (id) => {
    setTodos((prev) => prev.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          completed: !element.completed,
        };
      }
      return element;
    }));
  };

  const addItem = (todo) => {
    const newtodo = {
      id: uuidv4(),
      todo,
      completed: false,
    };
    setTodos([...todos, newtodo]);
  };

  const handelDelClick = (id) => {
    setTodos(todos.filter((element) => element.id !== id));
  };

  const handelSaveClick = (id, title) => {
    setTodos((prev) => prev.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          todo: title,
        };
      }
      return element;
    }));
  };

  const handelClearAll = () => {
    setTodos(todos.filter((element) => !element.completed));
  };

  return (
    <div className="todo-logic">
      <InputTodo addItem={addItem} />
      <TodosList
        todos={todos}
        handelCheckBox={handelCheckBox}
        handelDelClick={handelDelClick}
        handelSaveClick={handelSaveClick}
      />
      <button type="button" className="clear" onClick={handelClearAll}>Clear All</button>
    </div>
  );
}
