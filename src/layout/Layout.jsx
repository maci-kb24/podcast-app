import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../routes/home";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
