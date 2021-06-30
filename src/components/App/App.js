import React from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import {
  updataCards,
  updataPastime,
  updataVerifiableCard,
  showCards,
  disableCards,
  disableAllCards,
  enableAllCards,
  hideCards,
  increaseNumberMatches,
  openResultPopup,
  openWinPopup,
} from '../../redux/actions';
import { emojiArray } from '../../utils/constants';
import { msToTime } from '../../utils/msToTime';
import Card from '../Card/Card';
import Button from '../Button/Button';
import ResultPopup from '../ResultPopup/ResultPopup';
import WinPopup from '../WinPopup/WinPopup';
import './App.css';

function App({
  cards,
  updataCards,
  disabledCards,
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
  openResultPopup,
  openWinPopup,
}) {
  const [intervalTime, setIntervalTime] = React.useState(null);
  const [cardHideTimer, setCardHideTimer] = React.useState(null);

  function startGame() {
    updataCards(getArrayToDraw(emojiArray));
    enableAllCards();
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
    clearTimeout(cardHideTimer);
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
          openWinPopup();
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
      const newCardHideTimer = setTimeout(() => {
        updataVerifiableCard(null);
        hideCards(index);
      }, 5000);
      setCardHideTimer(newCardHideTimer);
    }
  }

  return (
    <div className="app">
      <div className="app__cards-container">
        {cards.map((dataCard, i) => (
          <Card
            key={dataCard?.key || i}
            index={i}
            value={dataCard?.value || ''}
            disabled={dataCard?.disabled || disabledCards || false}
            show={dataCard?.show || false}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
      <div className="app__menu">
        <h1 className="app__title">Игра "Память"</h1>

        <Button onClick={startGame} title="Старт" />
        <p className="app__timer">Таймер: {msToTime(pastTime)}</p>
        <Button onClick={() => openResultPopup()} title="Таблица результатов" />
      </div>
      <ResultPopup />
      <WinPopup />
    </div>
  );
}

const mapStateToProps = (state) => ({
  cards: state.cards.cards,
  verifiableСard: state.gameParams.verifiableСard,
  numberMatches: state.gameParams.numberMatches,
  disabledCards: state.app.disabledCards,
  pastTime: state.timer.pastTime,
});

const mapDispatchToProps = {
  updataCards,
  updataPastime,
  updataVerifiableCard,
  showCards,
  disableCards,
  disableAllCards,
  enableAllCards,
  hideCards,
  increaseNumberMatches,
  openResultPopup,
  openWinPopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
