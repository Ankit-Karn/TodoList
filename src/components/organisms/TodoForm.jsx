import React, { useState } from 'react'
import styles from './TodoForm.module.css'

const TodoForm = ({addTodo}) => {

  const[value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if(value){
        addTodo(value)
        setValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.TodoForm}>
      <input type='text' placeholder='What to do next' className={styles.todoInput} onChange = {(e)=> setValue(e.target.value)} value={value} />
      <button type='submit' className={styles.todoBtn} >Add ToDo</button>
    </form>
  )
}

export default TodoForm
