import React, { useState } from 'react'
import './signup.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import jwtdecode, { jwtDecode } from 'jwt-decode'
import { useAuth } from '../Utility/AuthContexProvider';

export default function Login() {
  let userlogininfo = JSON.parse(localStorage.getItem('userinfo'))
  const logindetail = {email:"",password:""};
  const [loginData,setlogindata] = useState(logindetail);
  const navigate = useNavigate();
  const {setIsLoggedIn ,setrole} = useAuth()
  const [check,setcheckbox] = useState(false);
  // const [token,settoken] = useState("");
  const handlelogin =(e)=>{
    setlogindata({...loginData,[e.target.name]:e.target.value})
   
  }
  function handlecheckbox(){
    setcheckbox(true);
  }
  const handlesubmit =(e)=>{
    e.preventDefault();
    if(!check){
        alert('Please check the box')
    }
   if(check){axios.post("http://localhost:5000/login", loginData).then((res) => {
      const token = res.data;
      console.log(token)
      if (!token) {
        alert("Invalid Email or Password");
      } else {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken.role)
        if (decodedToken.role === "student" || decodedToken.role === "admin") {
          // localStorage.setItem('token1', token);
          userlogininfo.isLoggedIn = true
          localStorage.setItem('userinfo',JSON.stringify(userlogininfo))
          const logininfo = JSON.parse(localStorage.getItem('userinfo'))
          setIsLoggedIn(logininfo.isLoggedIn);
          if (decodedToken.role === "student") {
            navigate("/");
          } else if (decodedToken.role === "admin") {
            setrole(decodedToken.role);
            navigate("/");
          }
        }
      }
    });

  }}
  return (
    <div className="login-sinup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form>
        <div className="loginSignup-fields"> 
          {/* <input type='text' placeholder='Enter the Name'></input> */}
          <input required='true' type='email' name='email' value={loginData.email} onChange={handlelogin} placeholder='Enter the Email'></input>
          <input type='password' required='true' name='password' value={loginData.password} onChange={handlelogin} placeholder='Enter the password'></input>
        </div>
        <button onClick={handlesubmit}>Continue</button>
        <p className='loginsignup-login'>Not Register Yet ? <span> <Link to='/signup'>Sign Up</Link> </span></p>
        <div className="loginsignup-agree">
          <input required type='checkbox' onClick={handlecheckbox} ></input>

          <p>By contiguning,I agree to the term use and privacy policy </p>
        </div>
        </form>
      </div>
    </div>
  )
}
