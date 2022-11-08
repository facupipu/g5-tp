import { useState } from 'react';
import axios from 'axios';
import Main from './Main.js';
import Play from './Play.js';
import NewQuestion from './NewQuestion.js';
import './App.css';



const App = () =>  {

  const [hiddenNewQuestion, setHiddenNewQuestion] = useState(true);
  const [hiddenPlay, setHiddenPlay] = useState(true);
  const [hiddenMenu, setHiddenMenu] = useState(false);
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
  const newQuestion = () => {
    setHiddenNewQuestion(prev => !prev);
  };
  const hideMenu = () => {
    setHiddenMenu(prev => !prev);
  };

  const changeMenues = comp => {
    hideMenu();
    if      (comp == 'play')        play()
    else if (comp == 'newQuestion') newQuestion();
  }

  return (
    <div className="App">
      <Main changeMenues={changeMenues} hiddenMenu={hiddenMenu} updateQuestions={updateQuestions}/>
      <Play changeMenues={changeMenues} hiddenPlay={hiddenPlay} questionsArray={questionsArray}/>
      <NewQuestion changeMenues={changeMenues} hiddenAddQuestion={hiddenNewQuestion}/>
    </div>
  );
}

export default App;
