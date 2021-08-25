import Popup from '../Popup/Popup';
import { useSelector, useDispatch } from 'react-redux';
import { closeResultPopup } from '../../redux/appSlice';
import { msToTime } from '../../utils/msToTime';
import './ResultPopup.css';

function ResultPopup() {
  const isOpenResultPopup = useSelector((state) => state.app.isOpenResultPopup);
  const results = useSelector((state) => state.results.results);
  const dispatch = useDispatch();

  function closePopup() {
    dispatch(closeResultPopup());
  }

  return (
    <Popup title="Таблица результатов" isOpen={isOpenResultPopup} close={closePopup}>
      <ul className="popup__resuls-list">
        {results.map((data, i) => (
          <div key={i} className="popup__resul-item">
            <p className="popup__resul-name">{data.name}</p>
            <p className="popup__resul-time">{msToTime(data.time)}</p>
          </div>
        ))}
      </ul>
    </Popup>
  );
}

export default ResultPopup;
