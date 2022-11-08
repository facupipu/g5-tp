import axios from 'axios';
import { useEffect, useState } from 'react'
const Play = props => {

  const { changeMenues, hiddenPlay, questionsArray } = props;
  const [questionIndex, setQuestionIndex] = useState(0);
  // useEffect(() => {
  //   questionsArray.sort(() => Math.random() - 0.5);
  // } ,[]);

  return (
    <div hidden={hiddenPlay}>
      <div>
        <button type="button" onClick={e => changeMenues('play')}>volver</button>
      </div>
      <div>
        <button type="button" onClick={e => console.log(questionsArray)}></button>
      </div>
      <p>{!questionsArray[questionIndex] && 'Cargando...'}</p>
      {questionsArray[questionIndex] && (<div className="question">
        <p>{questionsArray[questionIndex].title}</p>
        <p>{questionsArray[questionIndex].subject}</p>
        <ul>
          <li>{questionsArray[questionIndex].answers[0].answer}</li>
          <li>{questionsArray[questionIndex].answers[1].answer}</li>
          <li>{questionsArray[questionIndex].answers[2].answer}</li>
          <li>{questionsArray[questionIndex].answers[3].answer}</li>
        </ul>
      </div>)}


    </div>
  )
};

export default Play;
