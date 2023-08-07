import Layout from "../layout/Layout";
import PropTypes from "prop-types";
import Home from "../routes/home";

const Podcast = () => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

Podcast.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a valid React node
};

export default Podcast;
