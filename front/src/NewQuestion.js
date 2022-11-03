import { useState } from 'react';
import axios from 'axios';
import './styles.css';

const NewQuestion = props => {

  const {changeMenues, hiddenAddQuestion} = props;

  const [data, setData] = useState({
    title:'',
    subject:'',
    answer1:'',
    answer2:'',
    answer3:'',
    answer4:'',
    answers:[],
    correctAnswer: 0
  });

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    data.answers = [
      { answer: data.answer1, correct: false },
      { answer: data.answer2, correct: false },
      { answer: data.answer3, correct: false },
      { answer: data.answer4, correct: false }
    ];
    data.answers[data.correctAnswer].correct = true;

    axios.post('/api/questions', data)
       .then(res => {
         console.log(res.data);
    });

    setData({
      title:'',
      subject:'',
      answer1:'',
      answer2:'',
      answer3:'',
      answer4:'',
      answers:[],
      correctAnswer: 1
    })
    alert('Pregunta enviada correctamente');
    changeMenues('newQuestion');
  };

  const handleRadios = e => {
    console.log(+e.target.previousSibling.name[6]);
    let correct = +e.target.previousSibling.name[6]
    setData({ ...data, correctAnswer: correct-1});
  };

  return (
    <div hidden={(hiddenAddQuestion)}>
      <div>
       <button type="button" className="bg-red" onClick={e => changeMenues('newQuestion')} />
      </div>
      <h1>Agregar Pregunta</h1>
      <form onSubmit= {handleSubmit}>
        <div>
          <input required type="text" placeholder="Pregunta" name="title" value={data.title} onChange = {handleChange} />
        </div>
        <div>
          <select required placeholder="Materia" name="subject" id="subject" value={data.subject} onChange = {handleChange} >
            <option hidden value="">Elegir una Materia</option>
            <option value="fisica">Fisica</option>
            <option value="matematica">Matematica</option>
            <option value="computacion">Computacion</option>
            <option value="historia">Historia</option>
            <option value="geografia">Geografia</option>
          </select>
        </div>
        <div>
          <input required type="text" placeholder="1° Respuesta" name ="answer1" value={data.answer1} onChange = {handleChange} />
          <input name="trueAnswer" type="radio" id ="true1" value="1" defaultChecked onChange={handleRadios}/>
        </div>
        <div>
          <input required type="text" placeholder="2° Respuesta" name ="answer2" value={data.answer2} onChange = {handleChange} />
          <input name="trueAnswer" type="radio" id ="true2" value="2" onChange={handleRadios}/>
        </div>
        <div>
          <input required type="text" placeholder="3° Respuesta" name ="answer3" value={data.answer3} onChange = {handleChange} />
          <input name="trueAnswer" type="radio" id ="true3" value="3" onChange={handleRadios}/>
        </div>
        <div>
          <input required type="text" placeholder="4° Respuesta" name ="answer4" value={data.answer4} onChange = {handleChange} />
          <input name="trueAnswer" type="radio" id ="true4" value="4" onChange={handleRadios}/>
        </div>
        <button type="submit">PUBLICAR</button>
      </form>
    </div>
  )
};
export default NewQuestion;
