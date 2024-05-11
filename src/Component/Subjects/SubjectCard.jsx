import React from 'react'
import './subjectcard.css'
import { useAuth } from '../Utility/AuthContexProvider'
import {  useNavigate } from 'react-router-dom'
import SimpleQuestion from '../Quize/SimpleQuestion'
import { useQuestion } from '../Utility/QuestionContextProvider'
const SubjectCard = (props) => {
 const{isLoggedIn }= useAuth()
 const{setsubjectselected} = useQuestion();
 const navigate = useNavigate();
 const{setclass,setsubjectname} = useQuestion();
 const handlebtn =(e)=>{
  e.preventDefault()
  console.log(isLoggedIn)
    //  isLoggedIn ? <SimpleQuestion/> : navigate('/login')
    if (isLoggedIn) {
      navigate('/practice',{state : {subject : props.title}})
      setsubjectselected(true);
      setclass(props.classn);
      setsubjectname(props.title);
      
    } else {
      navigate('/login');
    }
    // navigate('/practice',{state : {subject : props.title}})
    //   setsubjectselected(true);
    //   setclass(props.classn);
    //   setsubjectname(props.title);
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
