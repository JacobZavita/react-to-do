import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'

const App = () => {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header>
        <h1>JZ's To-Do List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <List todos={todos}/>
    </div>
  )
}

export default App
