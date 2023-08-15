import { AboutHero, History, Team } from "../../components";

const About = () => {
  const heading = "About Pod of Cast";
  const subheading = "";
  return (
    <div className="about">
      <AboutHero heading={heading} subheading={subheading} />
      <History />
      <Team />
    </div>
  );
};

export default About;
