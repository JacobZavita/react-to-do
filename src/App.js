import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'
import MiniDrawer from './components/Menu'

const App = () => {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  const [todoType, setTodoType] = useState({
    work: [],
    finances: [],
    fitness: [],
    social: [],
    spiritual: [],
    watchlist: []
  })

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    handleFilter()
    saveLocalTodos()
  }, [todos, status])

  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">

      <MiniDrawer />
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <List
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        todoType={todoType}
        setTodoType={setTodoType}
      />
    </div>
  )
}
export default App