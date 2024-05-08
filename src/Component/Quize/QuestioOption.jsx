import React, { useEffect, useState } from "react";
import { useQuestion } from "../Utility/QuestionContextProvider";
import questions from "../Assets/Quesstion";
import Submit from "./Submit";
import { Navigate, useNavigate } from "react-router-dom";

const QuestioOption = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const navigate = useNavigate()
  const {
    issaveAndNext,
    setisSaveAndNext,
    issaveAndMark,
    setisSaveAndMark,
    ismarkReviewAndNext,
    setisMarkReviewAndNext,
    issubmit,
    setisSubmit,
    questionSelectionOPtion,
    setquestionSelectedpotion,
    questionindex,
    setquestonindex
  } = useQuestion();
    
  // console.log(selectedOptions[0])
  const handleOptionChange = (questionId, option,answer,e,optionIndex) => {
  
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: option,
    }));
    setquestionSelectedpotion((prevoption)=>({...prevoption,[questionId]:option}))

    
  };
  
 function handlesaveandnext(questionId,option){
  setisSaveAndNext((prevsave)=>({
    ...prevsave,
    [questionindex]:true
  }))
  // setquestionSelectedpotion((prevoption)=>({...prevoption,[questionId]:option}))
  setquestonindex(questionindex+1)
  // setSelectedOptions((prevSelectedOptions) => ({
  //   ...prevSelectedOptions,
  //   [questionId]: option,
  // }));

  }

  useEffect(() => {
    // Log the key-value pairs of selectedOptions
    Object.entries(questionSelectionOPtion).forEach(([questionId, selectedOption]) => {
      // console.log(`Question ID: ${questionId}, Selected Option: ${selectedOption}`);
    });
  }, [questionSelectionOPtion]);





  // useEffect(() => {
  //   if (questionSelectionOPtion.questionNo && questionSelectionOPtion.option) {
  //     setSelectedOptions((prevSelectedOptions) => ({
  //       ...prevSelectedOptions,
  //       [questionSelectionOPtion.questionNo]: questionSelectionOPtion.option,
  //     }));
  //   }
  // }, [questionSelectionOPtion]);
  

  return (
    <div className="">
      <div className="question-withoption">
        <p>{questions[questionindex].question}</p>
        <hr></hr>
        {questions[questionindex].options.map((option, optionIndex) => (
              <div key={optionIndex} className={`py-2`}>
                <input
                  type="radio"
                  name={`question-${questions[questionindex].id}`} // Unique name for each question
                  value={option}
                  id={`${option}-${questions[questionindex].id}`}
                  checked={selectedOptions[questions[questionindex].id] === option}
                  onChange={(e) => handleOptionChange(questions[questionindex].id, option,questions[questionindex].answer,e,optionIndex)}
                
                />
                {/* {console.log(question.id)} */}
                <label className={` ml-2 bg-${selectedOptions[questions[questionindex].id]=== option ?(option === questions[questionindex].answer) ? 'bg-green-300':'bg-red-300': '' }`} htmlFor={`${option}-${questions[questionindex].id}`}>{option}</label>
              </div>
            ))} 
      </div>

      {/* <div className="question-withoption">
        <p>{questions[2].question}</p>
        <hr></hr>
        {questions[2].options.map((option, optionIndex) => (
              <div key={optionIndex} className={`py-2`}>
                <input
                  type="radio"
                  name={`question-${questions[2].id}`} 
                  value={option}
                  id={`${option}-${questions[2].id}`}
                  checked={selectedOptions[questions[2].id] === option}
                  onChange={(e) => handleOptionChange(questions[2].id, option,questions[2].answer,e,optionIndex)}
                
                />
               
                <label className={`  bg-${selectedOptions[questions[2].id]=== option ?(option === questions[2].answer) ? 'bg-green-300':'bg-red-300': '' }`} htmlFor={`${option}-${questions[2].id}`}>{option}</label>
              </div>
            ))} 
      </div> */}
      

      <div className="btn-section w-90">
        <button
          className="bg-green-300 rounded px-3 py-2 text-xl text-black font-sans font-serif my-2 mx-3 mr-3"
          onClick={handlesaveandnext}
        >
          Save & Next
        </button>
        <button
          className="bg-orange-300 rounded px-3 py-2 text-xl text-black font-sans font-serif my-2 mx-3 mr-3"
          onClick={() => {
            setisSaveAndMark((prevmark)=>({
              ...prevmark,
              [questionindex]:true
            }));
            setquestonindex(questionindex+1)
            console.log(selectedOptions)
          }}
        >
          Save & Mark Review
        </button>
        <button
          className="bg-red-300 rounded px-3 py-2 text-xl text-black font-sans font-serif my-2 mx-3 mr-3"
          onClick={(e) => setSelectedOptions({})}
        >
          Clear Response
        </button>
        <button
          className="bg-blue-300 rounded px-3 py-2 text-xl text-black font-sans font-serif my-2 mx-3 mr-3"
          onClick={() => setisMarkReviewAndNext(true)}
        >
          Mark Review & Next
        </button>
        <hr />
        <button
          className="bg-red-600 rounded px-3 py-2 text-xl text-white font-sans font-serif my-2 mx-3 mr-3 absolute"
          onClick={()=>{
            setisSubmit(true)
            navigate('/submit')
            
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestioOption;
