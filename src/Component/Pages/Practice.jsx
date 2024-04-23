import React from 'react'
import Quize from '../Quize/Quize'
import {QuestionProvider} from '../Utility/QuestionContextProvider'
import SimpleQuestion from '../Quize/SimpleQuestion'

const Practice = () => {
  return (
    <div>
    <QuestionProvider>
    <Quize/>
    </QuestionProvider>
    {/* <SimpleQuestion/> */}
      
    </div>
  )
}

export default Practice
