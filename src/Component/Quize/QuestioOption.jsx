import React, { useState } from "react";
import { useQuestion } from "../Utility/QuestionContextProvider";
import questions from "../Assets/Quesstion";

const QuestioOption = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const[color,setcolor]=useState({});

  const {
    setisSaveAndNext,
    setisSaveAndMark,
    setisMarkReviewAndNext,
    setisSubmit,
  } = useQuestion();
  

  const handleOptionChange = (questionId, option,answer,e) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: option,
    }));
    
    if(e.target.value===answer) { setcolor((prevcolor)=>({...prevcolor,[option]:'green-300'}))}
    else  { setcolor((prevcolor)=>({...prevcolor,[option]:'red-300'}))}

    // if(answer===option ) {
    //   setcolor((prevcolor)=>({...prevcolor,[option]:'green-300'}))
    // }else{
    //   setcolor((prevcolor)=>({...prevcolor,[option]:'red-300'}))
    // }
    // setcolor((prevColor) => ({
    //   ...prevColor,
    //   [option]: answer === option ? 'green-300' : 'red-300', // Set color based on whether the option is correct
    // }));

    
  };

  return (
    <div className="">
      {questions.map((question, index) => (
        <div key={question.id}>
          <p>Question {index + 1}:</p>
          <hr />
          <p className="question">{question.question}</p>
          <div>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className={`py-2`}>
                <input
                  type="radio"
                  name={`question-${question.id}`} // Unique name for each question
                  value={option}
                  id={`${option}-${question.id}`}
                  checked={selectedOptions[question.id] === option}
                  onChange={(e) => handleOptionChange(question.id, option,question.answer,e)}
                />
                <label className={` bg-${color[option]}`} htmlFor={`${option}-${question.id}`}>{option}</label>
              </div>
            ))}
              

          </div>
        </div>
      ))}
      <div className="btn-section w-90">
        <button
          className="bg-green-300 rounded px-3 py-2 text-xl text-black font-sans font-serif my-2 mx-3 mr-3"
          onClick={() => setisSaveAndNext(true)}
        >
          Save & Next
        </button>
        <button
          className="bg-orange-300 rounded px-3 py-2 text-xl text-black font-sans font-serif my-2 mx-3 mr-3"
          onClick={() => setisSaveAndMark(true)}
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
          onClick={() => setisSubmit(true)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestioOption;
