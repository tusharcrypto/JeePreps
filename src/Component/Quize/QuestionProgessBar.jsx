import React, { useState } from 'react'
import { useQuestion } from '../Utility/QuestionContextProvider'

const QuestionProgessBar = () => {
  const questionumber =[1,2,3,4,5,6,7,8,9,10]
  const{
    issaveAndNext,
    issaveAndMark,
    ismarkReviewAndNext,
    issubmit,
   } = useQuestion();
  const [selectedquestion,setsetselectedquestion] = useState(null)
 const handleselectedquestion=(questionno)=>{
      setsetselectedquestion(questionno)
 }
   return (
    <div  className=' ml-16 my-2'>
      <div className="upperbtn ">

        <div className="first-row flex flex-row ">
        <span className='flex flex-row mr-6 '>
          <p className=' border border-gray-200 px-2 py-1 rounded  bg-slate-400 text-black ' >10</p>
          <p className='my-1 ml-1 text-x  ' >Not visited</p>
        </span>
        <span className='flex flex-row mr-6 '>
          <p className=' border border-gray-200 px-2 py-1 rounded  bg-red-400 text-black ' >10</p>
          <p className='my-1 ml-1 text-x  ' >Not Answered</p>
        </span>
        </div>

        <div className="second-row flex flex-row ">
        <span className='flex flex-row mr-6 '>
          <p className=' border border-gray-200 px-2 py-1 rounded  bg-green-400 text-black ' >10</p>
          <p className='my-1 ml-1 text-x  ' >Answered</p>
        </span>
        <span className='flex flex-row mr-6 '>
          <p className=' border border-gray-200 px-2 py-1 rounded  bg-purple-400 text-black ' >10</p>
          <p className='my-1 ml-1 text-x  ' >Mark as Review</p>
        </span>
        </div>
      </div>
      <div className="lowerbtn bg-red-50 ml-4 my-3 py-2 px-2 w-64 ">
        {questionumber.map((e,index)=>{

            return <button
            key={index}
            className={' border border-gray-200 px-3 py-2 rounded mr-2 bg-slate-400 text-black mb-2'}
            onClick={() => handleselectedquestion(index + 1)}
          >
           {index + 1}
          </button>
        })}
      </div>
    </div>
  )
}

export default QuestionProgessBar
