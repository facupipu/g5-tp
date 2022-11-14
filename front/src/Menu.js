import react from 'react';
import './styles.css';

const Menu = props => {

  const {variables, functions} = props;


  return (
    <div hidden={variables.hiddenMenu}>
      <h1>Preguntados La35</h1>
      <button className="menuButton" type="button" onClick={e => {functions.changeMenues('play'); functions.updateQuestions()}}>Jugar</button>
      <button className="menuButton" type="button" onClick={e => functions.changeMenues('newQuestion')}>Agreagar Pregunta</button>
    </div>
  )
};

export default Menu;
