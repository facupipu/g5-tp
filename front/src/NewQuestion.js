const NewQuestion = props => {

  const {isHidden} = props;

  return (
    <div hidden={isHidden}>
      <h1>Agregar Pregunta</h1>
      <form>
        <div><input type="text" placeholder="Pregunta"></input></div>
        <div>
          <select placeholder="Materia">
            <option value="fisica">Fisica</option>
            <option value="matematica">Matematica</option>
            <option value="computacion">Computacion</option>
            <option value="automotores">Automotores</option>
            <option value="historia">Historia</option>
            <option value="geografia">Geografia</option>
          </select>
        </div>
        <div><input type="text" placeholder="1° Respuesta"></input><input type="radio" name="fav_language"></input></div>
        <div><input type="text" placeholder="3° Respuesta"></input><input type="radio" name="fav_language"></input></div>
        <div><input type="text" placeholder="2° Respuesta"></input><input type="radio" name="fav_language"></input></div>
        <div><input type="text" placeholder="4° Respuesta"></input><input type="radio" name="fav_language"></input></div>
      </form>
    </div>
  )
};

export default NewQuestion;
