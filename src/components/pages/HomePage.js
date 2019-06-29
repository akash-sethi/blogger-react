import React from 'react';
import { Link } from "react-router-dom";

export const HomePage = ({isAuthenticated}) => (
    <div>
        <h1>Home Page</h1>
        {isAuthenticated? (
            <button>Login</button>
            ): (
            <div>
                <Link to='/login'>Login</Link> or <Link to='/signup'>Signup</Link>
            </div>
           )}
    </div>
);
