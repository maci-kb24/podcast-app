import PropTypes from "prop-types";
// import styles from "./button.module.css";

const Button = ({
  boxShadow,
  borderRadius,
  border,
  padding,
  bgColor,
  color,
  children,
}) => {
  const buttonStyles = {
    padding: padding || "12px 24px",
    color: color || "white",
    backgroundColor: bgColor || "black",
    borderRadius: borderRadius || "8px",
    border: border || "none",
    boxShadow: boxShadow || "6px 6px 0px 0px rgba(0, 0, 0, 0.25)",
  };

  return <button style={buttonStyles}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.number,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  boxShadow: PropTypes.string,
};

Button.defaultProps = {
  children: "Subscribe",
};

export default Button;
