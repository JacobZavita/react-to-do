import React from 'react'
import Buttons from '../Buttons'
import { VscThreeBars } from 'react-icons/vsc'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const List = props => {

  const handleOnDragEnd = result => {
    console.log(result)
    // make sure there is actually a change
    // access to the initial position
    // access to where it is dropped
    // check the direction greater than or less than
    // find the affected range of other items
    // if songs are affected, increment or decrement based on greater/less value
    // update positions
    // update list state
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
              {/* So this (below) is like his listRenderer function */}
              {props.filteredTodos.map((todo) => (
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
                          <li className={`todo-item ${todo.completed ? "completed" : ''}`}>
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
              {/* I think this ^ is in the right place now. Not 100% though */}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default List