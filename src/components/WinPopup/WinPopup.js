import React from 'react';
import { connect } from 'react-redux';
import Popup from '../Popup/Popup';
import './WinPopup.css';
import { closeWinPopup, addToResults, openResultPopup } from '../../redux/actions';
import { msToTime } from '../../utils/msToTime';

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
      />
      <button onClick={handleClick} className="popup__btn">
        Добавить в таблицу
      </button>
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
