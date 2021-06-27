import './App.css';
import { emojiArray } from '../../utils/constants';
import Card from '../Card/Card';
function App() {
  function getDoubleShuffleArray(arr) {
    const doubledArray = arr.concat(arr);
    let j, temp;
    for (let i = doubledArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = doubledArray[j];
      doubledArray[j] = doubledArray[i];
      doubledArray[i] = temp;
    }
    return doubledArray;
  }
  return (
    <div className="app">
      <form className="app__form">
        <fieldset className="app__fieldset">
          {getDoubleShuffleArray(emojiArray).map((el, i) => (
            <Card key={i} value={el} />
          ))}
        </fieldset>
      </form>
      <div className="app__menu">
        <button className="app__btn-start">Старт</button>
        <p className="app__timer">4:20</p>
      </div>
    </div>
  );
}

export default App;
