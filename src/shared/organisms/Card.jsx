import React from 'react';

export const Card = ({ question, answers, correctnaswer, questionNo, updateScore, score, changeQuestion }) => {
  const checkAnswer = async (selectedAnswer, id) => {
    if (selectedAnswer === correctnaswer) {
      updateScore(score + 1);
      document.getElementById(id).classList.add('correctAns');
    }
  };

  return (
    <>
      <div className='triviaTitle'>
        <p>Question: {questionNo + 1}/10</p>
        <p className='title'>Videogame Trivia</p>
        <p>Correct: {score}</p>
      </div>

      <br />

      <p dangerouslySetInnerHTML={{ __html: question }} />

      <br />

      {answers.map((answer, index) => (
        <div id={index} className='answer' key={index} onClick={() => checkAnswer(answer, index)}>
          <p>{index + 1}</p>
          <p dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      ))}
    </>
  );
};
