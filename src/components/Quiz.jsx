import React, { useState } from 'react';
import Data from "./resources/quizQuestion.json";
function Quiz() {
    const[question,setQuestion]=useState(0);

    const lastQuestion = () => {
        if (question > 0) {
          setQuestion((prevIndex) => prevIndex - 1);
        }
      };
    
      const nextQuestion = () => {
        if (question < Data.length - 1) {
          setQuestion((prevIndex) => prevIndex + 1);
        }

       
      };
  return (
    <div>
      <div>
       <div className='top'>Questions</div>
       <span className='questionNumber'> Questions {question+1} of 15</span>
      </div>
      <div><h3>{Data[question].question}</h3></div>
      <div className='answer'>
       <button>{Data[question].optionA}</button>
       <button>{Data[question].optionB}</button>
       <button>{Data[question].optionC}</button>
       <button>{Data[question].optionD}</button>
      </div>
      <div>

      <button onClick={lastQuestion} className='previous'>Previous</button>
      <button onClick={nextQuestion} className='next'>Next</button>
      
      </div>

    </div>
  )
}

export default Quiz

