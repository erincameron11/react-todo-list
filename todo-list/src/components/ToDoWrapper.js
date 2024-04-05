'use client'
import React, { useState } from 'react'
import { ToDoForm } from '../components/ToDoForm'
import { ToDoList } from '../components/ToDoList'
import { v4 as uuidv4 } from 'uuid'
uuidv4(); // call to initialize uuid

export const ToDoWrapper = () => {
    const [todos, setToDos] = useState([]) // state

    // Function for passing the todo prop
    const addToDo = todo => {
        // use the spread operator to copy todos
        setToDos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]); 
        console.log(todos);
    }

    return(
        <div className="wrapper">
            <h1 className="title">To Do List</h1>
            <ToDoForm addToDo={addToDo}/>
            {todos.map((todo, index) => (
                <ToDoList task={todo} key={index} />
            ))}
            {/* <ToDoList /> */}
        </div>
    );
}