import React from 'react'
import './subjectcard.css'
import { useAuth } from '../Utility/AuthContexProvider'
import {  useNavigate } from 'react-router-dom'
const SubjectCard = (props) => {
 const{isLoggedIn}= useAuth()
 const navigate = useNavigate();
 const handlebtn =(e)=>{
  e.preventDefault()
  console.log(isLoggedIn)
     isLoggedIn ? navigate('/practice') : navigate('/login')
 }
  return (
    <div className="sub-card">
      <img src={props.image}></img>
      <h4>{props.title}</h4>
      <button onClick={handlebtn}>Solve Now</button>
    </div>
  )
}

export default SubjectCard
