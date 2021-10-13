import { v4 as uuidv4 } from 'uuid'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "25vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '50px'
  },
  inputText: {
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
    padding: '0.5rem',
    fontSize: '2rem',
    border: 'none',
    background: 'white'
  }
}))

const Form = props => {
  const classes = useStyles()

  const handleInputText = ({ target }) => {
    props.setInputText(target.value)
  }

  const handleSubmitTodo = event => {
    event.preventDefault()
    props.setTodos([
      ...props.todos,
      { text: props.inputText, completed: false, id: uuidv4(), position: props.todos.length+1 }
    ])
    props.setInputText('')
    console.log(props.todos)
  }

  const handleStatus = ({ target }) => {
    props.setStatus(target.value)
  }

  return(
    <form className={classes.root}>
      <input
        value={props.inputText}
        type="text"
        className={classes.inputText}
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