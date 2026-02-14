import "../../styles/TextInput.css";

function TextInput({value, ...props}) {
  return <input type="text" className="textinput" value={value} {...props} />;
}

export default TextInput;
