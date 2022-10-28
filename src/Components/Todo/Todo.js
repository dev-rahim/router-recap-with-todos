import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './Todo.css'
const Todo = () => {
    const { id } = useParams()
    const [todo, setTodo] = useState([])
    const { title, completed } = todo;
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => res.json())
            .then(data => setTodo(data))
    }, [])
    console.log(todo);
    return (
        <div>

            <h3>{todo.title}</h3>
            <h3>{completed ? <h3>Completed</h3> : <h3>Processing</h3>}</h3>
        </div>
    );
};

export default Todo;