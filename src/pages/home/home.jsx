import {
  HomeHero,
  Membership,
  RecentEpisodes,
  HomeSponsor,
  Testimonial,
} from "../../components";

const Home = () => {
  const heading = "Your Daily Podcast";
  const subheading =
    "We cover all kinds of categories and a weekly special guest.";

  return (
    <div>
      <HomeHero heading={heading} subheading={subheading} />
      <Testimonial />
      <Membership />
      <RecentEpisodes />
      <HomeSponsor />
    </div>
  );
};

export default Home;
