import Button from "../../components/Button/Button";
import styles from "./footer.module.css";
import Google from "../../assets/images/icons/googlepodcast_black.png";
import Spotify from "../../assets/images/icons/spotify_black.png";
import Youtube from "../../assets/images/icons/youtube_black.png";
import Logo from "../../assets/images/logo.png";
import Twitter from "../../assets/images/icons/twitterred.png";
import Instagram from "../../assets/images/icons/instagram24x24.png";
import Tiktok from "../../assets/images/icons/tiktok24x24.png";
import GooglePodcast from "../../assets/images/icons/GooglePodcast.png";
import SpotifyPodcast from "../../assets/images/icons/Spotify.png";
import YoutubePodcast from "../../assets/images/icons/Youtube.png";
import AppStore from "../../assets/images/icons/app_store.png";
import GoogleStore from "../../assets/images/icons/google_play.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles["footer-top"]}>
        <div>
          <p>
            <span
              style={{
                display: "inline-block",
                padding: "3px 6px",
                borderRadius: "4px",
                border: "1px solid #cd4631",
                color: "#cd4631",
              }}
            >
              BETA
            </span>
          </p>
          <h1>Available now Pod of Cast App</h1>
          <p>We just launched our podcast app!</p>
          <div className="footer-btn">
            <Button>DOWNLOAD NOW</Button>
            <p>Content also available on:</p>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                width: "20%",
                margin: "auto",
                paddingLeft: "0",
              }}
            >
              <li style={{ listStyle: "none" }}>
                <img src={Google} />
              </li>
              <li style={{ listStyle: "none" }}>
                <img src={Spotify} />
              </li>
              <li style={{ listStyle: "none" }}>
                <img src={Youtube} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles["footer-bottom"]}>
        <div className="container">
          <div className={styles["footer-nav"]}>
            <div>
              <div style={{ display: "flex", alignItems: "end" }}>
                <img
                  src={Logo}
                  alt="Logo"
                  style={{ width: "74px", height: "74px" }}
                />
                <p>2023</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit.
              </p>
              <ul style={{ display: "flex", paddingLeft: "0" }}>
                <li style={{ listStyle: "none" }}>
                  <img src={Twitter} />
                </li>
                <li style={{ listStyle: "none" }}>
                  <img src={Instagram} />
                </li>
                <li style={{ listStyle: "none" }}>
                  <img src={Tiktok} />
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li style={{ listStyle: "none" }}>About</li>
                <li style={{ listStyle: "none" }}>Testimonials</li>
                <li style={{ listStyle: "none" }}>Features</li>
              </ul>
            </div>
            <div>
              <ul>
                <li style={{ listStyle: "none" }}>Episodes</li>
                <li style={{ listStyle: "none" }}>Pricing</li>
                <li style={{ listStyle: "none" }}>Blogs</li>
              </ul>
            </div>
            <div>
              <p>Listen to episodes on your fav platform:</p>
              <ul style={{ display: "flex", paddingLeft: "0" }}>
                <li style={{ listStyle: "none" }}>
                  <img src={GooglePodcast} style={{ height: "22px" }} />
                </li>
                <li style={{ listStyle: "none" }}>
                  <img src={SpotifyPodcast} style={{ height: "22px" }} />
                </li>
                <li style={{ listStyle: "none" }}>
                  <img src={YoutubePodcast} style={{ height: "22px" }} />
                </li>
              </ul>
              <p>App available on:</p>
              <ul style={{ display: "flex", paddingLeft: "0" }}>
                <li style={{ listStyle: "none" }}>
                  <img src={AppStore} />
                </li>
                <li style={{ listStyle: "none" }}>
                  <img src={GoogleStore} />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles["footer-copyright"]}>
            <div>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "20px",
                }}
              >
                <div>
                  <p>
                    ©2023. All Rights Reserved.{" "}
                    <span style={{ color: "#cd4631" }}>Pod of cast</span>
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <p>Terms</p>
                  <p style={{ paddingLeft: "24px" }}>Privacy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
