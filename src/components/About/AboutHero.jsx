import Button from "../Button/Button";
import PropTypes from "prop-types";

const Hero = () => {
  return (
    <section className="about-hero">
      <h1>
        About <span>Pod of Cast</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam–quis.
      </p>
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
