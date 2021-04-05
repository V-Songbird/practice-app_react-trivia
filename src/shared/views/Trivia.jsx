import React, { useEffect, useState } from 'react';
import { Card } from '../organisms/Card';
import { fetchQuestions } from '../services/triviaService';

export const Trivia = () => {
  const [questions, updateQuestions] = useState();
  const [isLoading, updateLoading] = useState(true);
  const [questionNo, updateQuestionNumber] = useState(0);
  const [score, updateScore] = useState(0);
  const [shuffle, updateShuffle] = useState(true);
  const [allAnswers, updateAnswers] = useState([]);

  useEffect(() => {
    const receiveQuestions = async () => {
      updateQuestions(await fetchQuestions());
      updateLoading(false);
    };
    receiveQuestions();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const changeQuestion = (dir) => {
    updateQuestionNumber(((dir ? questionNo - 1 : questionNo + 1) + 10) % 10);
    updateShuffle(true);
    for (let i = 0; i < 4; i++) document.getElementById(i).classList.remove('correctAns');
  };

  if (shuffle) {
    updateAnswers([...questions[questionNo].incorrect_answers, questions[questionNo].correct_answer].sort(() => Math.random() - 0.5));
    updateShuffle(false);
  }

  return (
    <>
      <div>
        <Card
          question={questions[questionNo].question}
          answers={allAnswers}
          correctnaswer={questions[questionNo].correct_answer}
          questionNo={questionNo}
          updateScore={updateScore}
          score={score}
          changeQuestion={changeQuestion}
        />
        <div className='buttons'>
          <button onClick={() => changeQuestion(true)}>
            <i className='fas fa-chevron-left' />
          </button>
          {/* <button className='btn-ans'>Answer</button> */}
          <button onClick={() => changeQuestion(false)}>
            <i className='fas fa-chevron-right' />
          </button>
        </div>
      </div>
    </>
  );
};
