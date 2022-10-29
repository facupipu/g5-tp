
import { useState } from 'react';
import Main from './Main.js'
import NewQuestion from './NewQuestion.js'
import './App.css';



const App = () =>  {

  const [hiddenAddQuestion, setHiddenAddQuestion] = useState(true);
  const [hiddenMenu, setHiddenMenu] = useState(false);

  const addQuestion = () => {
    setHiddenAddQuestion(prev => !prev);
  };
  const hideMenu = () => {
    setHiddenMenu(prev => !prev);
  };

  const changeMenues = () => {
    addQuestion();
    hideMenu();
  }

  return (
    <div className="App">
      <Main changeMenues={changeMenues} hiddenMenu={hiddenMenu}/>
      <NewQuestion changeMenues={changeMenues} hiddenAddQuestion={hiddenAddQuestion}/>
    </div>
  );
}

export default App;
