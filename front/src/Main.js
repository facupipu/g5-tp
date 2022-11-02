const Main = props => {

  const {hiddenMenu, changeMenues} = props;


  return (
    <div hidden={hiddenMenu}>
      <h1>Preguntados La35</h1>
      <button type="button" onClick={e => changeMenues('play')}>Jugar</button>
      <button type="button" onClick={e => changeMenues('newQuestion')}>Agreagar Pregunta</button>
    </div>
  )
};

export default Main;
