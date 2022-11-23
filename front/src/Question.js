import { useState } from 'react';

const Question = props => {

  const {variables, functions} = props;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = variables.questionsArray[questionIndex];

  const finished = () => {
    functions.play();
    functions.gameover();
  };

  const handleAnswerSubmit = e => {
    const isCorrect = e.target.dataset.correct === 'true' ? true : false;

    e.target.style.background = (isCorrect ? "green" : "red");
    if (isCorrect) {
      if (questionIndex == variables.questionsArray.length - 1) {
        alert("Ganaste, me quede sin preguntas");
        functions.updateScore(questionIndex)
        finished();
      }
      setQuestionIndex(questionIndex + 1);
      functions.updateScore(variables.score + 1);
    }
    else {
      finished();
      functions.updateScore(questionIndex);
      setQuestionIndex(0);
    }
    //poner todo el style default
    e.target.style.background = "#e9e9ed";
  }

  return(
    <div>
      <h4>Puntuacion: {variables.score}</h4>
      <h2>{!question && 'Cargando...'}</h2>
      {question && (<div className="question">
      <h1>{question.title}</h1>
      <h3>{question.subject}</h3>
      <div>
        {question.answers.map((currentAnswer, idx) => (
          <button className="optionButton" key={idx} onClick={handleAnswerSubmit} data-correct={currentAnswer.correct}>  {currentAnswer.answer} </button>
        ))}
      </div>
      </div>)}
    </div>
  )
}

export default Question;
