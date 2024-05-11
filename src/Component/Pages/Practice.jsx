import React, { useEffect } from 'react'
import Quize from '../Quize/Quize'
import {QuestionProvider, useQuestion} from '../Utility/QuestionContextProvider'
import SimpleQuestion from '../Quize/SimpleQuestion'
import { useLocation } from 'react-router-dom'
import SubjectWiseTopic from '../Quize/SubjectWiseTopic'
import { useAuth } from '../Utility/AuthContexProvider'

const Practice = () => {
  // const subject = sta  
  const {subjectselected,setsubjectselected} = useQuestion()
  const{setIsLoggedIn}= useAuth();
  useEffect(()=>{
    const logininfo = JSON.parse(localStorage.getItem('userinfo'))
    if(logininfo){
      setIsLoggedIn(logininfo.isLoggedIn);
    }else{
      setIsLoggedIn(false);
    }
   
  },[])
  const location = useLocation();
  const { state } = location;
  const subject = state ? state.subject : null;
  // console.log(subject)
  return (
  
    <div>
    

   
    {subjectselected&&state? <SubjectWiseTopic subject={subject} ></SubjectWiseTopic>:<Quize/>}
    
    {/* <SimpleQuestion/> */}
      
    </div>
  )
}

export default Practice
