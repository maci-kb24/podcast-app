import PropTypes from "prop-types";
// import styles from "./button.module.css";

const Button = ({ border, padding, bgColor, color, children }) => {
  const buttonStyles = {
    padding: padding || "12px 24px",
    color: color || "white",
    backgroundColor: bgColor || "black",
    border: border || "none",
  };

  return <button style={buttonStyles}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.number,
  border: PropTypes.string,
};

export default Button;
