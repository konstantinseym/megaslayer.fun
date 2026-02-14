import "../../styles/Btn.css";

function Btn({ children, type, ...props }) {
  return <button className="btn" type={type} {...props}>{children}</button>;
}

export default Btn;
