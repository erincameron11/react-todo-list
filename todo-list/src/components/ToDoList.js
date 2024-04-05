'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDoList = ({task}) => {
    return(
        <div className="ToDoListItem">
            <p>{task.task}</p>
            <div>
                <FontAwesomeIcon className="edit" icon={faPenToSquare} />
                <FontAwesomeIcon className="delete" icon={faTrash} />
            </div>
        </div>
    );
}