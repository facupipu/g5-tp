import react from 'react';

const Menu = props => {

  const {variables, functions} = props;


  return (
    <div hidden={variables.hiddenMenu}>
      <h1>Preguntados La35</h1>
      <button type="button" onClick={e => {functions.changeMenues('play'); functions.updateQuestions()}}>Jugar</button>
      <button type="button" onClick={e => functions.changeMenues('newQuestion')}>Agreagar Pregunta</button>
    </div>
  )
};

export default Menu;
