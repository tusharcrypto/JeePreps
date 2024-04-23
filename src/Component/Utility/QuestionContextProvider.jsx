import { useState,createContext,useContext } from "react";
const QuestionContext = createContext(); // 

 export  function QuestionProvider  (props){
  const [issaveAndNext, setisSaveAndNext] = useState(false);
  const [issaveAndMark, setisSaveAndMark] = useState(false);
  const [ismarkReviewAndNext, setisMarkReviewAndNext] = useState(false);
  const [issubmit, setisSubmit] = useState(false);
  const value = {
    issaveAndNext,
    setisSaveAndNext,
    issaveAndMark,
    setisSaveAndMark,
    ismarkReviewAndNext,
    setisMarkReviewAndNext,
    issubmit,
    setisSubmit,
  };

  return <QuestionContext.Provider value={value}>{props.children}</QuestionContext.Provider>; // Corrected usage of QuestionContext
};

export function useQuestion() {
  return useContext(QuestionContext);
}
