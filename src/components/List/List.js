import React from 'react'
import Buttons from '../Buttons'
import { VscThreeBars } from 'react-icons/vsc'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { orderBy, range } from 'lodash'

const List = props => {

  const handleOnDragEnd = result => {
    const { destination, source } = result
    // console.log(result, source, destination, props.todos)
    // don't do anything if there's no change
    if (!destination || ! source) {
      return
    }
    
    // don't do anything if the user puts the todo back in the same spot
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }
    
    // check if direction is greater than or less than
    const directionOfDrag = destination.index > source.index ? "greater" : "less"
    
    let affectedRange
    
    if (directionOfDrag === "greater") {
      affectedRange = range(source.index, destination.index + 1)
    } else {
      affectedRange = range(destination.index, source.index)
    }
    
    let reorderedList = props.filteredTodos.map((todo) => {
      // console.log(todo)
      if (todo.id === result.draggableId) {
        props.setTodos([...props.todos, todo.position = destination.index])
        console.log("condition 1", todo)
        return todo
      } else if (affectedRange.includes(todo.position)) {
        if (directionOfDrag === "greater") {
          props.setTodos([...props.todos, todo.position = todo.position -1])
          console.log("condition 2.1", todo)
          return todo
        } else if (directionOfDrag === "less") {
          props.setTodos([...props.todos, todo.position = todo.position+1])
          console.log("condition 2.2", todo)
          return todo
        }
      } else {
        console.log("condition 3", todo)
        return todo
      }
    })

    console.log(reorderedList)
    // update list state
    props.setTodos(reorderedList)
  }

  return(
    <div className="todo-container">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todolist">
          {(provided) => (
            <ul
              className="todo-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {orderBy(props.filteredTodos, "position").map((todo) => (
                  <Draggable
                    draggableId={todo.id.toString()}
                    index={todo.position}
                    key={todo.id}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <div className="todo">
                          <div {...provided.dragHandleProps}className="handle">
                            <VscThreeBars />
                          </div>
                          <li className={`todo-todo ${todo.completed ? "completed" : ''}`}>
                            {todo.text}
                          </li>
                          <Buttons
                            setTodos={props.setTodos}
                            todos={props.todos}
                            todo={todo}
                          />
                        </div>
                      </div>
                    )}
                  </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default List