import React from 'react'

const Form = props => {

  const handleInputText = ({ target }) => {
    props.setInputText(target.value)
  }

  const handleSubmitTodo = event => {
    event.preventDefault()
    props.setTodos([
      ...props.todos,
      { text: props.inputText, completed: false, id: Math.floor(Math.random() * 1000) }])
    props.setInputText('')
  }
  // come back and add uid package to generate actual uid on final version instead of the Math.random

  const handleStatus = ({ target }) => {
    console.log(target.value)
    props.setStatus(target.value)
  }

  return(
    <form>
      <input
        value={props.inputText}
        type="text"
        className="todo-input"
        onChange={handleInputText}
      />
      <button
        className="todo-button"
        type="submit"
        onClick={handleSubmitTodo}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          onChange={handleStatus}
          name="todos"
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form