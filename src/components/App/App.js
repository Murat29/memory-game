import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  showCard,
  hideCards,
  disableAllCards,
  enableAllCards,
  updataCards,
} from '../../redux/cardsSlice';
import { updataPastime } from '../../redux/timerSlice';
import { openResultPopup, openWinPopup } from '../../redux/appSlice';
import {
  increaseNumberMatches,
  updataVerifiableCard,
  cleareGameParams,
} from '../../redux/gameParamsSlice';
import { emojiArray } from '../../utils/constants';
import { msToTime } from '../../utils/msToTime';
import Card from '../Card/Card';
import Button from '../Button/Button';
import ResultPopup from '../ResultPopup/ResultPopup';
import WinPopup from '../WinPopup/WinPopup';
import './App.css';

function App() {
  const [intervalTime, setIntervalTime] = React.useState(null);
  const [cardHideTimer, setCardHideTimer] = React.useState(null);

  const cards = useSelector((state) => state.cards.cards);
  const cardsDisabled = useSelector((state) => state.cards.cardsDisabled);
  const pastTime = useSelector((state) => state.timer.pastTime);
  const verifiableСard = useSelector((state) => state.gameParams.verifiableСard);
  const numberMatches = useSelector((state) => state.gameParams.numberMatches);
  const dispatch = useDispatch();

  function startGame() {
    dispatch(updataCards(getArrayToDraw(emojiArray)));
    dispatch(enableAllCards());
    clearInterval(intervalTime);
    dispatch(updataPastime(0));
    const startDate = new Date();
    const newIntervalTime = setInterval(() => {
      dispatch(updataPastime(new Date() - startDate));
    }, 1000);
    setIntervalTime(newIntervalTime);
  }

  function getArrayToDraw(arr) {
    const doubledArray = arr.concat(arr).map((value) => ({
      value,
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
    dispatch(showCard(index));
    // Если открываем вторую карточку
    if (verifiableСard) {
      // Если карточки одинаковые
      if (verifiableСard.value === value) {
        dispatch(increaseNumberMatches());
        dispatch(updataVerifiableCard(null));
        // Победа
        if (numberMatches + 1 === emojiArray.length) {
          clearInterval(intervalTime);
          dispatch(openWinPopup());
          dispatch(cleareGameParams());
        }
      }
      // Если карточки разные
      else {
        dispatch(disableAllCards());
        setTimeout(() => {
          dispatch(hideCards([index, verifiableСard.index]));
          dispatch(updataVerifiableCard(null));
          dispatch(enableAllCards());
        }, 700);
      }
    }
    // Если открываем первую карточку
    else {
      dispatch(updataVerifiableCard({ value, index }));
      const newCardHideTimer = setTimeout(() => {
        dispatch(updataVerifiableCard(null));
        dispatch(hideCards([index]));
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
            disabled={dataCard?.show || cardsDisabled}
            show={dataCard?.show || false}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
      <div className="app__menu">
        <h1 className="app__title">Игра "Память"</h1>

        <Button onClick={startGame} title="Старт" />
        <p className="app__timer">Таймер: {msToTime(pastTime)}</p>
        <Button onClick={() => dispatch(openResultPopup())} title="Таблица результатов" />
      </div>
      <ResultPopup />
      <WinPopup />
    </div>
  );
}

export default App;
