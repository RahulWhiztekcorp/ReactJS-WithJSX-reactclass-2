import React, { useState } from 'react'
import SearchTodo from './SearchTodo'

const MainTodo = () => {
    const [Todos, UpdateTodos] = useState([
        'Task1',
        'Task2'
    ])
    const addNew = (task) => {
        if (task) {
            UpdateTodos([...Todos, task])
        } else {
            alert('Please enter text')
        }
    }
    return (
        <>
            <div style={{background:'skyblue',padding:8}}>
                <h6>Child Component : </h6>
                <SearchTodo add={addNew}></SearchTodo>
                <h6>Parent Component : </h6>
                <div style={{ background: 'green', color: 'white', padding: 1 }}>
                    <ul>
                        {
                            Todos.map((t) => <li>{t}</li>)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MainTodo