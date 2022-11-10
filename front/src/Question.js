import { useState } from 'react';

const Question = props => {

  const { questionsArray, functions } = props;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questionsArray[questionIndex];

  const finished = () => {
    functions.play();
    functions.gameover();
  };

  const handleAnswerSubmit = e => {
    const isCorrect = e.target.dataset.correct === 'true' ? true : false;

    e.target.style.background = (isCorrect ? "green" : "red");
    if (questionIndex == questionsArray.length - 1) {
      alert("Ganaste, me quede sin preguntas");
      finished();
      window.location.reload();
    }
    if (isCorrect) {
      setQuestionIndex(questionIndex + 1);
    }
    else {
      finished();
    }
    e.target.style.background = "#e9e9ed";
  }

  return(
    <div>
      <h2>{!question && 'Cargando...'}</h2>
      {question && (<div className="question">
      <h1>{question.title}</h1>
      <h3>{question.subject}</h3>
      <div>
        {question.answers.map((currentAnswer, idx) => (
          <button key={idx} onClick={handleAnswerSubmit} data-correct={currentAnswer.correct}>  {currentAnswer.answer} </button>
        ))}
      </div>
      </div>)}
    </div>
  )
}

export default Question;
