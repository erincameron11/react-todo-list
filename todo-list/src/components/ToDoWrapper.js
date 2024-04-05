'use client'
import React, { useState } from 'react'
import { ToDoForm } from '../components/ToDoForm'
import { ToDoList } from '../components/ToDoList'

export const ToDoWrapper = () => {
    return(
        <div className="wrapper">
            <ToDoForm />
            <ToDoList />
        </div>
    );
}