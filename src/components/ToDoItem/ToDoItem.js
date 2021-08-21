import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const ToDoItem = props => {

  const classes = useStyles();

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