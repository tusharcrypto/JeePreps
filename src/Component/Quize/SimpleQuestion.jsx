import React, { useEffect } from 'react';
// import questions from '../Assets/Quesstion.js';
import { useState } from 'react';
import axios from 'axios';

const SimpleQuestion = () => {
  console.log("commed here")
  const [questions,setquestion] = useState([])
  const [selectedOptions, setSelectedOptions] = useState({});
  const [viewsolution,setviewsolution] = useState({})
  useEffect(()=>{
        axios.get('http://localhost:5000/question').then((response)=>{
          console.log(response)
          setquestion(response.data)
          const backendData = response.data
          const transformedData = backendData.flatMap(quiz => (
            quiz.questions.map(question => ({
              id: question.questionId,
              question: question.questionInWords,
              options: [
                question.option1,
                question.option2,
                question.option3,
                question.option4
              ],
              answer: question[`option${question.ans}`],
              explanation: question.explanation
            }))
          ));
          setquestion(transformedData)
        })
        
  },[])

  const handleOptionChange = (questionId, option, answer) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: option,
    }));
  };
  
  const handlesolution =(questionId,ans)=>{
    setviewsolution((prevsolution)=>({...prevsolution,[questionId]:ans}))
  }

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index} className="question-option">
          <div className='question  '>
            <p className=' mr-2'>Question {index + 1}</p>
            {/* <hr/> */}
            <p>{question.question}</p>
          </div>
          <div className="options">
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className={`option-${optionIndex + 1}`}>
                <input
                  type="radio"
                  name={`question-${question.id}`} // Unique name for each question
                  value={option}
                  id={`${option}-${question.id}`}
                  // checked={selectedOptions[question.id] === option}
                  onChange={() => handleOptionChange(question.id, option, question.answer)}
                />
                <label
                  className={` ml-4 my-1 w-80 pl-4 bg-${selectedOptions[question.id] === option ? (option === question.answer ? 'green-300' : 'red-300') : ''} `}
                  htmlFor={`${option}-${question.id}`}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
          <p className='my-2 bg-yellow-100 w-28 px-1.5 py-2 ' onClick={()=>{handlesolution(question.id,!viewsolution[question.id])}}  >View Solution</p>
           {!viewsolution[question.id]?'':`${question.explanation}`}    
          <hr></hr>
        </div>
        
      ))}
    {console.log(selectedOptions)}
    </div>
  );
};

export default SimpleQuestion;
