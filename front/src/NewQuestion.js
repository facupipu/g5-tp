import { useState } from 'react';
import axios from 'axios';

const NewQuestion = props => {

  const {isHidden} = props;

//   const question = { quest, subject, ans1, ans2, ans3, ans4 };
//
//   const [question, setQuestion] = useState('');
//
  const handleSubmit = e => {
  e.preventDefault();
  const data = {
    question  : document.getElementById('newQuestionName').value,
    subject   : document.getElementById('newQuestionSubject').value,
    answers   : [
      {answer : document.getElementById('newQuestionAnswer1').value , correct : document.getElementById('true1').checked},
      {answer : document.getElementById('newQuestionAnswer2').value , correct : document.getElementById('true2').checked},
      {answer : document.getElementById('newQuestionAnswer3').value , correct : document.getElementById('true3').checked},
      {answer : document.getElementById('newQuestionAnswer4').value , correct : document.getElementById('true4').checked}
    ]
  }
  console.log(data)
  // axios.post('/api/question', data)
  //   .then(res => {
  //     console.log(res.data);
  //     setMessage('');
  //   });
};

  return (
    <div hidden={isHidden}>
      <h1>Agregar Pregunta</h1>
      <form onSubmit= {handleSubmit}>
        <div><input type="text" placeholder="Pregunta" id = "newQuestionName"></input></div>
        <div>
          <select placeholder="Materia" id = "newQuestionSubject">
            <option value="fisica">Fisica</option>
            <option value="matematica">Matematica</option>
            <option value="computacion">Computacion</option>
            <option value="automotores">Automotores</option>
            <option value="historia">Historia</option>
            <option value="geografia">Geografia</option>
          </select>
        </div>
        <div><input type="text" placeholder="1° Respuesta" id ="newQuestionAnswer1"></input><input name="trueAnswer" type="radio" id ="true1" value="1"></input></div>
        <div><input type="text" placeholder="2° Respuesta" id ="newQuestionAnswer2"></input><input name="trueAnswer" type="radio" id ="true2" value="2"></input></div>
        <div><input type="text" placeholder="3° Respuesta" id ="newQuestionAnswer3"></input><input name="trueAnswer" type="radio" id ="true3" value="3"></input></div>
        <div><input type="text" placeholder="4° Respuesta" id ="newQuestionAnswer4"></input><input name="trueAnswer" type="radio" id ="true4" value="4"></input></div>
        <button type="submit">PUBLICAR</button>
      </form>
    </div>
  )
};
export default NewQuestion;
