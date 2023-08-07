import PropTypes from "prop-types";
import Button from "../Button/Button";

const Hero = ({ heading, subheading }) => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>{heading}</h1>
        <p>{subheading}</p>
        <Button>Subscribe</Button>
      </div>
    </div>
  );
};

Hero.propTypes = {
  heading: PropTypes.node.isRequired,
  subheading: PropTypes.node.isRequired, // Ensure children is a valid React node
};

export default Hero;
