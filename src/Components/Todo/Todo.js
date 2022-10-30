import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { RecapContext, TextContext } from '../../App';
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
    // console.log(todo);
    const RecapContextValue = useContext(TextContext);
    console.log(RecapContextValue);

    return (
        <div>

            <h3>{todo.title}</h3>
            <h3>{completed ? <h3>Completed</h3> : <h3>Processing</h3>}</h3>
            <h4>Using context value: {RecapContextValue}</h4>
        </div>
    );
};

export default Todo;