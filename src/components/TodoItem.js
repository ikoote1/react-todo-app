const TodoItem = ({text,done}) => {
    return(
        <div className="list">
        <input type="checkbox" />
        {text}
      </div>
    )
}

export default TodoItem