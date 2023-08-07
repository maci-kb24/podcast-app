import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a valid React node
};

export default Layout;
