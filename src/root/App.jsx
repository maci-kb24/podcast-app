import Layout from "../layout/Layout";
import Home from "../routes/home";
import About from "../routes/about";
import Contact from "../routes/contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Podcast = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Podcast;
