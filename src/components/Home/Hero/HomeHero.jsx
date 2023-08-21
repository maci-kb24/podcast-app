import PropTypes from "prop-types";
import Button from "../../Button/Button";
import styles from "./hero.module.css";
import SelfImage from "../../../assets/images/cover.png";
import Perplexed from "../../../assets/images/cover1.png";
import WomensRights from "../../../assets/images/cover2.png";
import Youtube from "../../../assets/images/icons/youtube.png";
import Spotify from "../../../assets/images/icons/spotify.png";
import Google from "../../../assets/images/icons/google.png";

const HomeHero = () => {
  const podcastList = [
    {
      name: "Self-confidence",
      image: SelfImage,
      icons: {
        youtube: Youtube,
        spotify: Spotify,
        google: Google,
      },
    },
    {
      name: "Perplexed Mind ",
      image: Perplexed,
      icons: {
        youtube: Youtube,
        spotify: Spotify,
        google: Google,
      },
    },
    {
      name: "Women's Rights ",
      image: WomensRights,
      icons: {
        youtube: Youtube,
        spotify: Spotify,
        google: Google,
      },
    },
  ];
  return (
    <div className="hero">
      <div className={styles["hero-content"]}>
        <h1>
          Your Daily <br />
          <span style={{ color: "#cd4631" }}>Podcast</span>
        </h1>
        <p>We cover all kinds of categories and a weekly special guest.</p>
        <Button margin="40px 0px 0px 0px" />
      </div>
      <div className={styles["podcast-list"]}>
        {podcastList.map((podcast, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundImage: `url(${podcast.image})`,
                backgroundSize: "cover",
              }}
            >
              <ul>
                <li>
                  <img src={podcast.icons.google} alt="Google" />
                </li>
                <li>
                  <img src={podcast.icons.spotify} alt="Spotify" />
                </li>
                <li>
                  <img src={podcast.icons.youtube} alt="YouTube" />
                </li>
              </ul>
              <p>{podcast.name}</p>
            </div>
          );
        })}
      </div>
      <div className="hero-logos">
        <div className="container">
          <hr />
          <div className="logos">
            <div>
              <h3>Supported by:</h3>
            </div>
            <div>
              <ul>
                <li>
                  <img src={Spotify} />
                </li>
                <li>
                  <img src={Google} />
                </li>
                <li>
                  <img src={Youtube} />
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

HomeHero.propTypes = {
  heading: PropTypes.node.isRequired,
  subheading: PropTypes.node.isRequired, // Ensure children is a valid React node
};

export default HomeHero;
