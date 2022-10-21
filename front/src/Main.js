
const Main = props => {

  const {addQuestion} = props;


  return (
    <div>
      <h1>Preguntados La35</h1>
      <button type="button">Jugar</button>
      <button type="button" onClick={addQuestion}>Agreagar Pregunta</button>
    </div>
  )
};

export default Main;
