import React, { useState } from 'react'
import styles from './TodoWrapper.module.css'
import TodoForm from './TodoForm'
import Todo from './Todo'
import{ v4 as uuidv4 } from "uuid";

const TodoWrapper = () => {

  const[todos, setTodos] = useState([]);
  
  const addTodo = (todo) => {
    setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false },
      ]);
      console.log(todos)
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return ( 
    <div className={styles.TodoWrapper}>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index)=>(
      <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}

export default TodoWrapper
