import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({
  todos,
  handelCheckBox,
  handelDelClick,
  handelSaveClick,
}) {
  return (
    <ul className="todo-list">
      {todos.map((element) => (
        <TodoItem
          key={element.id}
          item={element}
          handelCheckBox={handelCheckBox}
          handelDelClick={handelDelClick}
          handelSaveClick={handelSaveClick}
        />
      ))}
    </ul>
  );
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    todo: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  handelCheckBox: PropTypes.func.isRequired,
  handelDelClick: PropTypes.func.isRequired,
  handelSaveClick: PropTypes.func.isRequired,
};

export default TodosList;
