import React, { useEffect, useState } from 'react'
import question from '../Assets/Quesstion'
import { useQuestion } from '../Utility/QuestionContextProvider'
import QuestionProgessBar from './QuestionProgessBar'
const ShowResult = () => {
  const{questionindex,
    setquestonindex,setisSubmit, questionSelectionOPtion,
    setquestionSelectedpotion, } = useQuestion()
    const [optioncolor,setoptioncolor] = useState({})
    useEffect(()=>{
      setquestonindex(0)
    },[setisSubmit])

  
    useEffect(() => {
      // Calculate option colors whenever questionSelectionOPtion or questionindex changes
      let newOptionColor = {};
      question[questionindex].options.forEach((option) => {
        const selectedOption = questionSelectionOPtion[questionindex+1];
        const answer = question[questionindex].answer;
        console.log(questionSelectionOPtion[questionindex+1]+" "+option+" "+answer)
        if (option === answer) {
          newOptionColor[option] = 'green-300';
        } else if (selectedOption === option) {
          newOptionColor[option] = 'red-300';
        } else {
          newOptionColor[option] = 'white';
        }
      });
      setoptioncolor(newOptionColor);
    }, [questionSelectionOPtion, questionindex]);
    
      function handleNext(){
       if(questionindex<9) setquestonindex(questionindex+1)
      }
      function handlePrevoius(){
        if(questionindex >0)setquestonindex(questionindex-1)
      }
    return (
      <div className=' flex flex-row mb-20 '>
        <div className="question-section">
          <p className='text-3xl font-sans' > <span className='mr-3'>{questionindex+1+")"}</span> {question[questionindex].question}</p>
          <hr className=' h-0 bg-black'></hr>
          <div className="questions-option ml-6">
            {question[questionindex].options.map((Option, optindex) => {
              // Get the color class dynamically based on the option color
              const colorClass = optioncolor[Option];
              return (
                <React.Fragment key={optindex}>
                  <label className={`bg-${colorClass} mb-3 w-100 p-2 text-2xl text-black rounded-md`} >  {Option}</label>
                  <br></br>
                </React.Fragment>
              );
            })}
          </div>
          <hr></hr>
         <div className="btn-section flex flex-row justify-between px-3 mt-5  ">
         <button className=' bg-orange-300 px-4 py-2 rounded-md font-sans text-2xl ' onClick={handlePrevoius} >Prevois</button>
         <button className=' bg-purple-300 px-4 py-2 rounded-md font-sans text-2xl ' onClick={handleNext} >Next</button>
         </div>
        </div>
            <hr></hr>




        <div className="proges-bar-section">
          <QuestionProgessBar></QuestionProgessBar>
        </div>
      </div>
    );
    
}

export default ShowResult
