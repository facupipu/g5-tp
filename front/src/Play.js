import axios from 'axios';

const Play = props => {

  const { changeMenues, hiddenPlay } = props;

  const questions;
  axios.get('api/questions')
  
  console.log(questions);

  return (
    <div hidden={hiddenPlay}>
      <div>
        <button type="button" onClick={e => changeMenues('play')}/>
      </div>
      Esto Funciona?
    </div>
  )
};

export default Play;
