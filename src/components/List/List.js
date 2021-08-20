import React from 'react'
import ToDoItem from '../ToDoItem'

const List = props => {
  return(
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map(todo => (
          <ToDoItem key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  )
}

export default List