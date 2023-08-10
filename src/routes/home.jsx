import styles from "./home.module.css";
import HomeHero from "../components/Home/HomeHero";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
  const heading = "Your Daily Podcast";
  const subheading =
    "We cover all kinds of categories and a weekly special guest.";

  return (
    <div className={styles.home}>
      <HomeHero heading={heading} subheading={subheading} />
      <Testimonial />
    </div>
  );
};

export default Home;
