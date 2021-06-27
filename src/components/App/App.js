import React from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { startGame, upDataPastime } from '../../redux/actions';
import { emojiArray } from '../../utils/constants';
import { msToTime } from '../../utils/msToTime';
import Card from '../Card/Card';
import './App.css';

function App({ cards, startGame, disabled, pastTime, upDataPastime }) {
  function start() {
    startGame(getArrayToDraw(emojiArray));
    const startDate = new Date();
    setInterval(() => {
      upDataPastime(new Date() - startDate);
    }, 1000);
  }

  function getArrayToDraw(arr) {
    const doubledArray = arr.concat(arr).map((value) => ({
      value,
      disabled: false,
      // Создаем унакальные ключю, иначе карточки не будут перерендериться
      key: nanoid(),
    }));
    let j, temp;
    // перемешиваем массив в случайном порядке
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
          {cards.map((dataCard, i) => (
            <Card
              key={dataCard?.key || i}
              value={dataCard?.value || ''}
              disabled={dataCard?.disabled || disabled || false}
            />
          ))}
        </fieldset>
      </form>
      <div className="app__menu">
        <button onClick={start} className="app__btn-start">
          Старт
        </button>
        <p className="app__timer">Таймер: {msToTime(pastTime)}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cards: state.cards.cards,
  verifiableСards: state.cards.verifiableСards,
  numberOfCoincidences: state.cards.numberOfCoincidences,
  disabled: state.cards.disabled,
  pastTime: state.timer.pastTime,
});

const mapDispatchToProps = {
  startGame,
  upDataPastime,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
