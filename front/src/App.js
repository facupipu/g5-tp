
import { useState } from 'react';
import Main from './Main.js'
import NewQuestion from './NewQuestion.js'
import './App.css';



const App = () =>  {

  const [isHidden, setIsHidden] = useState(true);

  const addQuestion = () => {
    setIsHidden(prev => !prev);
  };

  return (
    <div className="App">
      <Main addQuestion={addQuestion} />
      <NewQuestion isHidden={isHidden}/>
    </div>
  );
}

export default App;
