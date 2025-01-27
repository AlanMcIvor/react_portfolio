import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <a
        style={{ backgroundColor: props.backgroundColor, color: props.color }}
        href="#"
      >
        {props.text}
      </a>
    </div>
  );
};

export default Button;
