import "../../styles/TextField.css";

function TextField({ value, placeholder, ...props }) {
  return (
    <textarea
      className="textfield"
      autoComplete="off"
      value={value}
      placeholder={placeholder}
      {...props}
    ></textarea>
  );
}

export default TextField;
