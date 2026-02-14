import "../../styles/TextField.css";

function TextField({ value, ...props }) {
  return (
    <textarea
      className="textfield"
      autoComplete="off"
      value={value}
      {...props}
    ></textarea>
  );
}

export default TextField;
