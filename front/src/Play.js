import axios from 'axios';
import { useEffect, useState } from 'react'
const Play = props => {

  const { changeMenues, hiddenPlay, questionsArray } = props;

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(questionsArray);
  } ,[questionsArray]);

  return (
    <div hidden={hiddenPlay}>
      <div>
        <button type="button" onClick={e => changeMenues('play')}/>
      </div>
      <div>
        <button type="button" onClick={e => console.log(questions)}/>
      </div>
      Esto Funciona?
    </div>
  )
};

export default Play;
