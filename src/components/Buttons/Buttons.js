import React from 'react'

const Buttons = props => {

  const handleDelete = () => {
    props.setTodos(props.todos.filter(el => el.id !== props.todo.id))
  }

  const handleComplete = () => {
    props.setTodos(props.todos.map(item => {
      if (item.id === props.todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item
    }))
  }

  return (
    <>
      <button onClick={handleComplete} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </>
  )

}

export default Buttons