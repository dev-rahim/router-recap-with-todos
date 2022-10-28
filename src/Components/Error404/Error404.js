
import React from 'react';
import { Link } from 'react-router-dom'
import './Error404.css'

const Error404 = () => {
    return (
        <div className='Error d-flex flex-column justify-content-center align-items-center'>
            <h2>Page not found!!</h2>
            <Link to='/'>
                <div className=" btn btn-sm btn-success">
                    Back to Home
                </div>
            </Link>
        </div>
    );
};

export default Error404;