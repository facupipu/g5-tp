
const Main = props => {

  const {isHidden, play} = props;


  return (
    <div>
      <h1>Preguntados La35</h1>
      <button type="button">Jugar</button>
      <button type="button" onClick={play}>Agreagar Pregunta</button>
    </div>
  )
};

export default Main;
