import React from 'react'
import './topicCard.css'
import { useAuth } from '../Utility/AuthContexProvider'
import {  useNavigate } from 'react-router-dom'
const TopicCard = (props) => {
 const{isLoggedIn}= useAuth()
 const navigate = useNavigate();
 const handlebtn =(e)=>{
  e.preventDefault()
  console.log(isLoggedIn)
    //  isLoggedIn ? <SimpleQuestion/> : navigate('/login')
    if (isLoggedIn) {
      navigate('/practice',{state : {subject : props.title}})
      // console.log(props.title)
    } else {
      navigate('/login');
    }
 }
  return (
    <div className="sub-card">
      <img src={props.image}></img>
      <h4  id='top'>{props.title}</h4>
      <button onClick={handlebtn}>Solve Now</button>
    </div>
  )
}

export default TopicCard
