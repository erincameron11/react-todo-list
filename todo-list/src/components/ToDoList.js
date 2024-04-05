'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDoList = ({task}) => {
    // Function for handling the complete click
    const handleCheck = e => {
        // If task is complete, add text decoration
        
    }
    
    // Function for handling the delete button click
    const handleDelete = e => {
        
    }

    

    return(
        <div className="ToDoListItem">
            <input className="checkboxes" type="checkbox" onClick={handleCheck}/>
            <p>{task.task}</p>
            <div>
                <FontAwesomeIcon className="edit" icon={faPenToSquare} />
                <FontAwesomeIcon className="delete" icon={faTrash} onClick={handleDelete}/>
            </div>
        </div>
    );
}