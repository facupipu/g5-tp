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

  const updateQuestions = () => {
  console.log('updating questions...');
  axios.get('/api/questions')
  .then(res => {
    setQuestionsArray(res.data.sort(() => Math.random() - 0.5));
    // questionsArray.sort(() => Math.random() - 0.5);
  })
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
  }

  const functions = {
    changeMenues,
    play,
    menu
  };

  return (
    <div className="App">
      <Menu changeMenues={changeMenues} hiddenMenu={hiddenMenu} updateQuestions={updateQuestions}/>
      <Play hiddenPlay={hiddenPlay} questionsArray={questionsArray} functions={functions}/>
      <Gameover hiddenGameover={hiddenGameover}/>
      <NewQuestion changeMenues={changeMenues} hiddenAddQuestion={hiddenNewQuestion}/>
    </div>
  );
}

export default App;
