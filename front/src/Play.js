import Question from './Question.js'
import { useEffect, useState } from 'react'
const Play = props => {

  const {variables, functions} = props;

  return (
    <div hidden={variables.hiddenPlay}>
      <div>
        <button type="button" onClick={e => functions.changeMenues('play')}>volver</button>
      </div>
      <Question variables={variables} functions={functions}/>
    </div>
  )
};

export default Play;
