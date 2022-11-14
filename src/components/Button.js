import '../assets/stylesheets/Button.css';

const Button = (props) => {
    return <button className="btn" onClick={props.handleClick}>{props.title}</button>
};

export default Button;