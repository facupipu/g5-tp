import Question from './Question.js'
import { useEffect, useState } from 'react'
import './styles.css';

const Play = props => {

  const {variables, functions} = props;

  return (
    <div hidden={variables.hiddenPlay}>
      <div className="playGoBack">
        <button type="button" className="goBack" onClick={e => functions.changeMenues('play')}><i className="fa fa-close"></i></button>
      </div>
      <Question variables={variables} functions={functions}/>
    </div>
  )
};

export default Play;
