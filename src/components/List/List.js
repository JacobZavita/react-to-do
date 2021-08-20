import React from 'react'
import ToDoItem from '../ToDoItem'

const List = props => {
  return(
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredTodos.map(todo => (
          <ToDoItem
            key={todo.id}
            text={todo.text}
            todo={todo}
            todos={props.todos}
            setTodos={props.setTodos}
          />
        ))}
      </ul>
    </div>
  )
}

export default List