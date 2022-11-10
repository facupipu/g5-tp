import Question from './Question.js'
import { useEffect, useState } from 'react'
const Play = props => {

  const { hiddenPlay, questionsArray, functions } = props;

  functions.gameover = gameover;

  return (
    <div hidden={hiddenPlay}>
      <div>
        <button type="button" onClick={e => functions.changeMenues('play')}>volver</button>
      </div>
      <Question questionsArray={questionsArray} functions={functions}/>
    </div>
  )
};

export default Play;
