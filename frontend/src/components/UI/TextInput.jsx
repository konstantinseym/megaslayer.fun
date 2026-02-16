import "../../styles/TextInput.css";

function TextInput({value, placeholder, ...props}) {
  return <input type="text" className="textinput" value={value} placeholder={placeholder} {...props} />;
}

export default TextInput;
