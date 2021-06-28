import { connect } from 'react-redux';
import Popup from '../Popup/Popup';
import { msToTime } from '../../utils/msToTime';
import './ResultPopup.css';
import { closeResultPopup } from '../../redux/actions';

function ResultPopup({ results, isOpenResultPopup, closeResultPopup }) {
  return (
    <Popup title="Таблица результатов" isOpen={isOpenResultPopup} close={closeResultPopup}>
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
const mapStateToProps = (state) => ({
  results: state.results.results,
  isOpenResultPopup: state.app.isOpenResultPopup,
});

const mapDispatchToProps = {
  closeResultPopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultPopup);
