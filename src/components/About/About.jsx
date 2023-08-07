import Hero from "./Hero";

const About = () => {
  const heading = "About Pod of Cast";
  const subheading = "lorem ipsum lorem ispum lorem ipsum";
  const aboutButtons = [
    { label: "Recent Episodes" },
    { label: "Subscribe" },
    // Add more buttons as needed
  ];
  return (
    <section className="about-us">
      <Hero heading={heading} subheading={subheading} buttons={aboutButtons} />
    </section>
  );
};

export default About;
