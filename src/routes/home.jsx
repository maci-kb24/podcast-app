import styles from "./home.module.css";
import HomeHero from "../components/Hero/HomeHero";

const Home = () => {
  const heading = "Your Daily Podcast";
  const subheading =
    "We cover all kinds of categories and a weekly special guest.";

  return (
    <div className={styles.home}>
      <HomeHero heading={heading} subheading={subheading} />
    </div>
  );
};

export default Home;
