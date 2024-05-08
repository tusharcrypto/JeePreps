import React, { useState } from 'react'
import './signup.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import jwtdecode, { jwtDecode } from 'jwt-decode'
import { useAuth } from '../Utility/AuthContexProvider';

export default function Login() {
  const logindetail = {email:"",password:""};
  const [loginData,setlogindata] = useState(logindetail);
  const navigate = useNavigate();
  const {  isLoggedIn, setIsLoggedIn} = useAuth()
  // const [token,settoken] = useState("");
  const handlelogin =(e)=>{
    setlogindata({...loginData,[e.target.name]:e.target.value})
  }
  const handlesubmit =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/login", loginData).then((res) => {
      const token = res.data;
      console.log(token)
      if (!token) {
        alert("Invalid Email or Password");
      } else {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken.role)
        if (decodedToken.role === "student" || decodedToken.role === "admin") {
          localStorage.setItem('token1', token);
          setIsLoggedIn(true);
          if (decodedToken.role === "student") {
            navigate("/");
          } else if (decodedToken.role === "admin") {
            navigate("/");
          }
        }
      }
    });

  }
  return (
    <div className="login-sinup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginSignup-fields"> 
          {/* <input type='text' placeholder='Enter the Name'></input> */}
          <input type='email' name='email' value={loginData.email} onChange={handlelogin} placeholder='Enter the Email'></input>
          <input type='password' name='password' value={loginData.password} onChange={handlelogin} placeholder='Enter the password'></input>
        </div>
        <button onClick={handlesubmit}>Continue</button>
        <p className='loginsignup-login'>Not Register Yet ? <span> <Link to='/signup'>Sign Up</Link> </span></p>
        <div className="loginsignup-agree">
          <input type='checkbox'></input>
          <p>By contiguning,I agree to the term use and privacy policy </p>
        </div>
      </div>
    </div>
  )
}
