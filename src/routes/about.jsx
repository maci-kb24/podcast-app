import AboutHero from "../components/About/AboutHero";

const About = () => {
  const heading = "About Pod of Cast";
  const subheading = "";
  return (
    <div className="about">
      <AboutHero heading={heading} subheading={subheading} />
    </div>
  );
};

export default About;
