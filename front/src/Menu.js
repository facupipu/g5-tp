import react from 'react';

const Menu = props => {

  const {hiddenMenu, changeMenues, updateQuestions} = props;


  return (
    <div hidden={hiddenMenu}>
      <h1>Preguntados La35</h1>
      <button type="button" onClick={e => {changeMenues('play'); updateQuestions()}}>Jugar</button>
      <button type="button" onClick={e => changeMenues('newQuestion')}>Agreagar Pregunta</button>
    </div>
  )
};

export default Menu;
