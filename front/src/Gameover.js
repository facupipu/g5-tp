const Gameover = props => {

  const {variables, functions} = props;

  const newGame = () => {
    functions.play();
    functions.gameover();
    functions.updateQuestions();
    functions.updateScore(0);
  }

  const backToMenu = () => {
    functions.changeMenues('gameover');
    functions.updateScore(0);
  }

  return(
    <div hidden={variables.hiddenGameover}>
      <h2>Perdiste</h2>
      <h2>Tu puntuacion: {variables.score}</h2>
      <button onClick={newGame}>Jugar de nuevo</button>
      <button onClick={backToMenu}>Volver al Menu</button>
    </div>
  )
};

export default Gameover;
