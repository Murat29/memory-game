import React from 'react';
import { connect } from 'react-redux';
import Popup from '../Popup/Popup';
import Button from '../Button/Button';
import { closeWinPopup, addToResults, openResultPopup } from '../../redux/actions';
import { msToTime } from '../../utils/msToTime';
import './WinPopup.css';

function WinPopup({ isOpenWinPopup, closeWinPopup, pastTime, addToResults, openResultPopup }) {
  const [name, setName] = React.useState('');

  function handleClick() {
    if (name.trim()) {
      addToResults({ name, time: pastTime });
      closeWinPopup();
      openResultPopup();
      setName('');
    }
  }
  return (
    <Popup title="Поздравляю, вы победили" isOpen={isOpenWinPopup} close={closeWinPopup}>
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
const mapStateToProps = (state) => ({
  isOpenWinPopup: state.app.isOpenWinPopup,
  pastTime: state.timer.pastTime,
});

const mapDispatchToProps = {
  closeWinPopup,
  addToResults,
  openResultPopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(WinPopup);
