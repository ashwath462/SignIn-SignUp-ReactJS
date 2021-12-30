import React from 'react'
import './homepage.css';
import { useNavigate } from 'react-router-dom';

function Homepage({setLoginUser}) {
    const navigate = useNavigate()
    const logout = () => {
        setLoginUser({})
        navigate("/login")
    }
    return (
        <div className='homepage'>
            <h1>Hello Homepage</h1>
            <div className='button' onClick={logout}>Logout</div>
        </div>
    )
}

export default Homepage
