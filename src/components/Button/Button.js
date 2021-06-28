import './Button.css';

function Button(props) {
  return (
    <button onClick={props.onClick} className={`btn ${props.isSmallTitle && 'btn_text_small'}`}>
      {props.title}
    </button>
  );
}
export default Button;
