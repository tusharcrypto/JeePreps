import React, { useState } from 'react'
import { useEffect } from 'react'
import { useQuestion } from '../Utility/QuestionContextProvider'
import question from '../Assets/Quesstion'
import ShowResult from './ShowResult'
import FileUploadForm from '../Admin/AdminDashBoard'
import AdminDashBoard from '../Admin/AdminDashBoard'
import score from '../Assets/score.png'
import attempted from '../Assets/attempted.png'
import accurracy from '../Assets/accuracy.png'
import {Chart as Chartjs} from 'chart.js/auto'
import {Bar} from 'react-chartjs-2'
const Submit = () => {
  const { questionSelectionOPtion, issubmit,
    setquestionSelectedpotion,}= useQuestion()

    const[correctanswer,setcorrectanswer] = useState(0);
    const[wronganswer,setwronganswer] = useState(0);
    const tottalquestion = question.length
    useEffect(() => {
      // Log the key-value pairs of selectedOptions
      hadlemarks()
      
    },[]);
    // hadlemarks()
    function hadlemarks() {
      Object.entries(questionSelectionOPtion).forEach(([questionId, selectedOption]) => {
        if (question[questionId - 1].answer === selectedOption) {
          setcorrectanswer(prevCorrectAnswer => prevCorrectAnswer + 1);
        } else {
          setwronganswer(prevWrongAnswer => prevWrongAnswer + 1);
        }
      });
    }
    

  console.log(correctanswer+" "+wronganswer)
  return (
    
    <div className='bg-white'>

          <div className="scoresection flex flex-row  mt-5 ml-32 bg-red-50 rounded-xl  w-auto py-2.5 mr-96 mb-2 ">
            <img className='w-12 rounded-md ml-36 mr-2 rounded-3xl bg-purple-500 p-2' src={score}  ></img> <span className='mr-28 '>{correctanswer+` / `+tottalquestion} <br></br> score </span>
            <img className='w-12 rounded-md ml-36 mr-2 rounded-3xl bg-orange-500 p-2' src={attempted} ></img>
            <span className='mr-28 '>{correctanswer+wronganswer+` / `+tottalquestion} <br></br> Attempted </span>
            <img className='w-12 rounded-md ml-36 mr-2 rounded-3xl bg-green-500 p-2' src={accurracy} ></img>
            <span className='mr-2 '>{(((correctanswer%tottalquestion)*10).toFixed(2))+`%`} <br></br> score </span>
          </div>
     
        {/* {/* <h1>{`correct answer: ${correctanswer}, Swrong naswr: ${wronganswer} totalquestion :${tottalquestion} `}</h1>  */}

         <hr></hr> 
         <div className="bar-chart w-96 align-middle ml-72 mb-20">
          <p>Performance:</p>
          <Bar data={{
            labels:["Correct","Wrong","Total"],
            datasets:[{label:"Score Card",data:[200,300,400]}]
          }} >

          </Bar>

         </div>
        {/* <ShowResult/>  */}

        <AdminDashBoard/> 
    
    </div>
  )
}

export default Submit
