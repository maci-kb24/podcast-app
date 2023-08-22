// import illustration from "../../assets/images/illustation.svg";
import Ideas from "../../../assets/images/ideas.png";
import "./testimonial.css";
import ArrowLeft from "../../../assets/images/icons/Arrow - Left Circle.png";
import ArrowRight from "../../../assets/images/icons/Arrow - Right Circle.png";
import ScribbleRed from "../../../assets/images/icons/Scribblered.png";
import Scribble from "../../../assets/images/icons/Scribble1.png";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-top">
        <img
          src={ScribbleRed}
          style={{ transform: "translateY(-70px)", margin: "auto" }}
        />
        <div className="container">
          <div className="testimonial-top-heading">
            <div>
              <h1>
                Talk. Listen. Get inspired
                <br /> by every minute of it.
              </h1>
            </div>
            <div className="grid testimonial-content">
              <div>
                <img src="https://placehold.co/150" alt="illustation" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio.
                </p>
              </div>
              <div>
                <img src={Ideas} alt="ideas" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio.
                </p>
              </div>
            </div>
          </div>
          <div className="testimonial-quote">
            <div>
              <p></p>
              <h2>
                One of the best daily podcasts that covers every topic on
                Spotify.
              </h2>
            </div>
            <div>
              <span>John Smith,</span>
              <span>Social Community Manager</span>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-bottom">
        <img src={Scribble} />
        <div className="testimonial-bottom-heading">
          <h1>What our listeners say</h1>
          <p>Their experience throughout every platform</p>
        </div>
        <div className="testimonial-cards grid">
          <div className="testimonial-card">
            <p
              style={{ fontSize: "95px", color: "#cd4631", fontWeight: "700" }}
            >
              &ldquo;
            </p>
            <p>
              Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod
              tempor incidi ut labore et dolore magna aliqua.{" "}
            </p>
            <ul>
              <li>
                <img src="https://via.placeholder.com/40" />
              </li>
              <li>
                <p>Luna lovegood,</p>
              </li>
              <li>
                <img src="https://via.placeholder.com/40" />
              </li>
            </ul>
          </div>
          <div className="testimonial-card">
            <p
              style={{ fontSize: "95px", color: "#cd4631", fontWeight: "700" }}
            >
              &ldquo;
            </p>
            <p>
              Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod
              tempor incidi ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <img src="https://via.placeholder.com/40" />
              </li>
              <li>
                <p>Luna lovegood,</p>
              </li>
              <li>
                <img src="https://via.placeholder.com/40" />
              </li>
            </ul>
          </div>
          <div className="testimonial-card">
            <p
              style={{ fontSize: "95px", color: "#cd4631", fontWeight: "700" }}
            >
              &ldquo;
            </p>
            <p>
              Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod
              tempor incidi ut labore et dolore magna aliqua.{" "}
            </p>
            <ul>
              <li>
                <img src="https://via.placeholder.com/40" />
              </li>
              <li>
                <p>Luna lovegood,</p>
              </li>
              <li>
                <img src="https://via.placeholder.com/40" />
              </li>
            </ul>
          </div>
        </div>
        <div className="testimonial-arrows">
          <img src={ArrowLeft} alt="arrow-left" />
          <img src={ArrowRight} alt="arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
