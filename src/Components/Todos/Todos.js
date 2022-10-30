import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import './Todos.css'
const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => {
                setTodos(data)
                setSearchValue(data)
            }
            )
    }, [])

    const [searchValue, setSearchValue] = useState([]);


    const handleSearch = (e) => {
        const machedTodos = todos.filter(todo => todo.title.includes(e.target.value));
        setSearchValue(machedTodos)
    }


    // console.log(todos);
    return (
        <div className='card container my-5'>
            <div className="card-header d-flex justify-content-center align-items-center mt-3">
                <h3 className='text-start text-info py-2 w-50'>My Task List</h3>
                <input onChange={handleSearch} type="text" placeholder='search here' className='h-75  form-control' />
            </div>
            <Table striped bordered hover size="sm" className='container'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Info</th>
                    </tr>
                    {
                        searchValue.map(todo => <tr>
                            <td>{todo.id}</td>
                            <td className='text-start'>{todo.title}</td>
                            <td>
                                {
                                    todo.completed ? 'completed' : 'Processing'

                                }</td>
                            <td>
                                <Link to={`/todo/${todo.id}`} >
                                    <div className="btn btn-success btn-sm">
                                        details
                                    </div>
                                </Link></td>
                        </tr>)
                    }
                </thead>
                <tbody>
                </tbody>
            </Table>
        </div>
    );
};

export default Todos;