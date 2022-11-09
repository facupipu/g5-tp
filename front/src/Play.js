import Question from './Question.js'
import { useEffect, useState } from 'react'
const Play = props => {

  const { changeMenues, hiddenPlay, questionsArray } = props;

  return (
    <div hidden={hiddenPlay}>
      <div>
        <button type="button" onClick={e => changeMenues('play')}>volver</button>
      </div>
      <Question questionsArray={questionsArray} changeMenues={changeMenues}/>
    </div>
  )
};

export default Play;
