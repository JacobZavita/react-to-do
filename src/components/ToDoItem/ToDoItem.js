import React from 'react'

const ToDoItem = props => {
  const handleDelete = () => {
    props.setTodos(props.todos.filter(el => el.id !== props.todo.id))
  }

  return(
    <div className="todo">
      <li className="todo-item">{props.text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default ToDoItem