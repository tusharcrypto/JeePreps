import React from 'react'
import Quize from '../Quize/Quize'
import {QuestionProvider} from '../Utility/QuestionContextProvider'
import SimpleQuestion from '../Quize/SimpleQuestion'
import { useLocation } from 'react-router-dom'
import SubjectWiseTopic from '../Quize/SubjectWiseTopic'

const Practice = () => {
  // const subject = sta  
  const location = useLocation();
  const { state } = location;
  const subject = state ? state.subject : null;
  // console.log(subject)
  return (
  
    <div>
    
    <Quize/>
   

    {/* <SubjectWiseTopic subject={subject} ></SubjectWiseTopic> */}
    {/* <SimpleQuestion/> */}
      
    </div>
  )
}

export default Practice
