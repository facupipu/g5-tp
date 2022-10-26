import { useState } from 'react';
import axios from 'axios';

const NewQuestion = props => {

  const {isHidden} = props;

//   const question = { quest, subject, ans1, ans2, ans3, ans4 };

  const [data, setData] = useState({
    title:'',
    subject:'',
    answer1:'',
    answer2:'',
    answer3:'',
    answer4:'',
    asnwer:[]
  });

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value});
  }

  const handleSubmit = e => {
  e.preventDefault();
  console.log(data)

  // axios.post('/api/question', data)
  //    .then(res => {
  //    console.log(res.data);
  // });
};

  return (
    <div hidden={isHidden}>
      <h1>Agregar Pregunta</h1>
      <form onSubmit= {handleSubmit}>
        <div>
          <input type="text" placeholder="Pregunta" name="title" value={data.title} onChange = {handleChange} />
        </div>
        <div>
          <select placeholder="Materia" name="subject" value={data.subject} onChange = {handleChange} >
            <option value="fisica">Fisica</option>
            <option value="matematica">Matematica</option>
            <option value="computacion">Computacion</option>
            <option value="automotores">Automotores</option>
            <option value="historia">Historia</option>
            <option value="geografia">Geografia</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="1° Respuesta" name ="answer1" value={data.answer1} onChange = {handleChange} />
          <input name="trueAnswer" type="radio" id ="true1" value="1"/>
        </div>
        <div>
          <input type="text" placeholder="2° Respuesta" name ="answer2" value={data.answer2} onChange = {handleChange} />
          <input name="trueAnswer" type="radio" id ="true2" value="2"/>
        </div>
        <div>
          <input type="text" placeholder="3° Respuesta" name ="answer3" value={data.answer3} onChange = {handleChange} />
          <input name="trueAnswer" type="radio" id ="true3" value="3"/>
        </div>
        <div>
          <input type="text" placeholder="4° Respuesta" name ="answer4" value={data.answer4} onChange = {handleChange} />
          <input name="trueAnswer" type="radio" id ="true4" value="4"/>
        </div>
        <button type="submit">PUBLICAR</button>
      </form>
    </div>
  )
};
export default NewQuestion;
