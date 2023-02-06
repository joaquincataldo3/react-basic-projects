import React, { useState } from 'react';
import questionsAnswers from '../data';



const Question = (props) => {

  const { title, info } = props;

  const [showInfo, setShowInfo] = useState(false)

  const activeIcon = showInfo ? <i class='bx bx-minus'></i> : <i class='bx bx-plus' ></i>;

  return (
    <div className='q-a-container'>
      <div className='question-arrow-container' onClick={() => setShowInfo(!showInfo)}>
        <h3 className='question'>{title}</h3>
        {activeIcon}
      </div>
      {
        <div className={`${showInfo ? 'answer-container-active' : 'answer-container'}`}> 
          <p className='answer'> {info} </p>
      </div>
      
      }
    </div>

  )
};

export default Question;
