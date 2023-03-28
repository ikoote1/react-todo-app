import { useState } from 'react';
import PropTypes from 'prop-types';
// import { FaTrash } from 'react-icons/fa';
// import { AiFillEdit } from 'react-icons/ai';
// import { BiSave } from 'react-icons/bi';

export default function TodoItem({
  item,
  handelCheckBox,
  handelDelClick,
  handelSaveClick,
}) {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(item.todo);

  const handelEditClick = () => {
    setEditMode(true);
  };

  const handelEdit = (e) => {
    setTitle(e.target.value);
  };

  const saveClick = () => {
    setEditMode(false);
    handelSaveClick(item.id, title);
  };

  return (
    <li>
      <div className={editMode ? 'disable' : 'todoitem'}>
        <div>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => handelCheckBox(item.id)}
          />
          <span className={item.completed ? 'mark' : ''}>{title}</span>
        </div>
        <div>
          <button type="button" onClick={handelEditClick}>
            {/* <AiFillEdit /> */}
            E
          </button>
          <button type="button" onClick={() => handelDelClick(item.id)}>
            {/* <FaTrash /> */}
            D
          </button>
        </div>
      </div>
      <div className={editMode ? 'todoitem' : 'disable'}>
        <input
          className="input-text"
          type="text"
          value={title}
          onChange={handelEdit}
        />
        <button type="button" onClick={() => saveClick(item.id, title)}>
          {/* <BiSave /> */}
          =
        </button>
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    todo: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handelCheckBox: PropTypes.func.isRequired,
  handelDelClick: PropTypes.func.isRequired,
  handelSaveClick: PropTypes.func.isRequired,
};
