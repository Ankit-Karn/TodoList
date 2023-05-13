import React from 'react'
import styles from './Todo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task, toggleComplete, deleteTodo}) => {
  return (
    <div className={styles.Todo}>
      <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faTrash} className={styles.faTrash} onClick={()=> deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo
