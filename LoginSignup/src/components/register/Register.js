import React, {useState} from 'react'
import './register.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate()
    const [user, setUser] =useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register = ()=>{
        let emailPattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
        let emailPattern2 = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+\.[A-Za-z]+$/);
        const { name, email, password, reEnterPassword } = user
        if(name && email && password && (password===reEnterPassword) && (emailPattern.test(email) || emailPattern2.test(email))){
            // alert("posted")
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                navigate("/login")
            })
        }else{
            alert("invalid input")
        }
        
    }

    return (
        <div className='register'>
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter your Password" onChange={handleChange}></input>
            <div className='button' onClick={register}>Register</div>
            <div>or</div>
            <div className='button' onClick={()=>{navigate("/login")}}>Login</div>
        </div>
    )
}

export default Register
