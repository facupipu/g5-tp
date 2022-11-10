import { useState } from 'react';
import axios from 'axios';
import Menu from './Menu.js';
import Play from './Play.js';
import Gameover from './Gameover.js'
import NewQuestion from './NewQuestion.js';
import './App.css';

const App = () =>  {

  const [hiddenMenu, setHiddenMenu] = useState(false);
  const [hiddenPlay, setHiddenPlay] = useState(true);
  const [hiddenGameover, setHiddenGameover] = useState(true);
  const [hiddenNewQuestion, setHiddenNewQuestion] = useState(true);

  const [questionsArray, setQuestionsArray] = useState([]);
  const [score, setScore] = useState(0);

  const updateQuestions = () => {
  console.log('updating questions...');
  axios.get('/api/questions')
  .then(res => {
    setQuestionsArray(res.data.sort(() => Math.random() - 0.5));
    // questionsArray.sort(() => Math.random() - 0.5);
  })
}
  const updateScore = value => {
   setScore(value);
  }

  const play = () => {
    setHiddenPlay(prev => !prev);
  };
  const gameover = () => {
    setHiddenGameover( prev => !prev);
  };
  const newQuestion = () => {
    setHiddenNewQuestion(prev => !prev);
  };
  const menu = () => {
    setHiddenMenu(prev => !prev);
  };

  const changeMenues = comp => {
    menu();
    if      (comp == 'play')        play()
    else if (comp == 'newQuestion') newQuestion();
    else if (comp == 'gameover') gameover();
  }

  const functions = {
    updateQuestions,
    updateScore,
    play,
    gameover,
    newQuestion,
    menu,
    changeMenues
  };

  const variables = {
    hiddenMenu,
    hiddenPlay,
    hiddenGameover,
    hiddenNewQuestion,
    questionsArray,
    score,
  };

  return (
    <div className="App">
      <Menu functions={functions} variables={variables}/>
      <Play functions={functions} variables={variables}/>
      <Gameover functions={functions} variables={variables}/>
      <NewQuestion functions={functions} variables={variables}/>
    </div>
  );
}

export default App;
