import React from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import {
  startGame,
  updataPastime,
  updataVerifiableCard,
  showCards,
  disableCards,
  disableAllCards,
  enableAllCards,
  hideCards,
  increaseNumberMatches,
} from '../../redux/actions';
import { emojiArray } from '../../utils/constants';
import { msToTime } from '../../utils/msToTime';
import Card from '../Card/Card';
import './App.css';

function App({
  cards,
  startGame,
  disabled,
  pastTime,
  verifiableСard,
  numberMatches,
  updataPastime,
  updataVerifiableCard,
  showCards,
  disableCards,
  disableAllCards,
  enableAllCards,
  hideCards,
  increaseNumberMatches,
}) {
  const [intervalTime, setIntervalTime] = React.useState(null);

  function start() {
    startGame(getArrayToDraw(emojiArray));
    clearInterval(intervalTime);
    updataPastime(0);
    const startDate = new Date();
    const newIntervalTime = setInterval(() => {
      updataPastime(new Date() - startDate);
    }, 1000);
    setIntervalTime(newIntervalTime);
  }

  function getArrayToDraw(arr) {
    const doubledArray = arr.concat(arr).map((value) => ({
      value,
      disabled: false,
      show: false,
      // Создаем унакальные ключю, иначе карточки не будут перерендериться
      key: nanoid(),
    }));
    let j, temp;
    // Перемешиваем массив в случайном порядке
    for (let i = doubledArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = doubledArray[j];
      doubledArray[j] = doubledArray[i];
      doubledArray[i] = temp;
    }
    return doubledArray;
  }

  function handleCardClick(value, index) {
    showCards(index);
    // Если открываем вторую карточку
    if (verifiableСard) {
      // Если карточки одинаковые
      if (verifiableСard.value === value) {
        increaseNumberMatches();
        disableCards(index, verifiableСard.index);
        updataVerifiableCard(null);
        if (numberMatches + 1 === emojiArray.length) {
          clearInterval(intervalTime);
          console.log('Победа');
        }
      }
      // Если карточки разные
      else {
        disableAllCards();
        setTimeout(() => {
          hideCards(index, verifiableСard.index);
          updataVerifiableCard(null);
          enableAllCards();
        }, 700);
      }
    }
    // Если открываем первую карточку
    else {
      updataVerifiableCard({ value, index });
    }
  }

  return (
    <div className="app">
      <form className="app__form">
        <fieldset className="app__fieldset">
          {cards.map((dataCard, i) => (
            <Card
              key={dataCard?.key || i}
              index={i}
              value={dataCard?.value || ''}
              disabled={dataCard?.disabled || disabled || false}
              show={dataCard?.show || false}
              handleCardClick={handleCardClick}
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
  verifiableСard: state.cards.verifiableСard,
  numberMatches: state.cards.numberMatches,
  disabled: state.cards.disabled,
  pastTime: state.timer.pastTime,
});

const mapDispatchToProps = {
  startGame,
  updataPastime,
  updataVerifiableCard,
  showCards,
  disableCards,
  disableAllCards,
  enableAllCards,
  hideCards,
  increaseNumberMatches,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
