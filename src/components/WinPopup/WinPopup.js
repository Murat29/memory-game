import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Popup from '../Popup/Popup';
import Button from '../Button/Button';
import { openResultPopup, closeWinPopup } from '../../redux/appSlice';
import { addToResults } from '../../redux/resultsSlice';
import { msToTime } from '../../utils/msToTime';
import './WinPopup.css';

function WinPopup() {
  const [name, setName] = React.useState('');

  const isOpenWinPopup = useSelector((state) => state.app.isOpenWinPopup);
  const pastTime = useSelector((state) => state.timer.pastTime);
  const dispatch = useDispatch();

  function handleClick() {
    if (name.trim()) {
      dispatch(addToResults({ name, time: pastTime }));
      closePopup();
      dispatch(openResultPopup());
      setName('');
    }
  }

  function closePopup() {
    dispatch(closeWinPopup());
  }

  return (
    <Popup title="Поздравляю, вы победили" isOpen={isOpenWinPopup} close={closePopup}>
      <p className="popup__text">Ваш результат: {msToTime(pastTime)}</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="popup__input"
        placeholder="Введите свое имя"
        maxLength="15"
      />
      <Button title="Добавить в таблицу" onClick={handleClick} isSmallTitle={true} />
    </Popup>
  );
}

export default WinPopup;
