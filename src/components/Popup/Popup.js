import whiteСross from '../../images/white-cross.svg';
import './Popup.css';

function Popup(props) {
  return (
    <div className={`popup ${props.isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__btn-close">
          <img
            className="popup__img-close"
            src={whiteСross}
            alt="Закрыть форму."
            onClick={props.close}
          />
        </button>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
}
export default Popup;
