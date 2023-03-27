import { useState } from 'react';
import InputToDo from './InputToDo';
import TodoItem from './components/TodoItem';

const TodoLogic = () =>{
    const{tasks,setTasks} = useState([]);
    function addTask(text){
        setTasks(value:prev=>{
            return [...prev,{text:text,done:false}]
        });
    }
    return(
        <div>
             <InputToDo onAdd={addTask}/>
            {tasks.map(task => (
                <TodoItem {...task}/>
            ))}
        </div>
    );
}

export default TodoLogic