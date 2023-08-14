import Button from "../Button/Button";
import PropTypes from "prop-types";

const Hero = ({ heading, subheading }) => {
  return (
    <section className="about-hero">
      <h1>{heading}</h1>
      <p>{subheading}</p>
      <Button bgColor="white" color="black" border="2px solid black">
        Recent Episodes
      </Button>
      <Button>Subscribe</Button>
    </section>
  );
};

Hero.propTypes = {
  heading: PropTypes.node.isRequired,
  subheading: PropTypes.node.isRequired, // Ensure children is a valid React node
};
export default Hero;
