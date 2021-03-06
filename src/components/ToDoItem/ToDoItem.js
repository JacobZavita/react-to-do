import React from 'react'
import { VscThreeBars } from 'react-icons/vsc'

const ToDoItem = props => {

  const handleDelete = () => {
    props.setTodos(props.todos.filter(el => el.id !== props.todo.id))
  }

  const handleComplete = () => {
    props.setTodos(props.todos.map(item => {
      if(item.id === props.todo.id){
        return{
          ...item, completed: !item.completed
        }
      }
      return item
    }))
  }

  return(
    <div className="todo">
      <div
        className="handle"
      >
        <VscThreeBars />
      </div>
      <li className={`todo-item ${props.todo.completed ? "completed" : ''}`}>{props.text}</li>
      <button onClick={handleComplete} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default ToDoItem