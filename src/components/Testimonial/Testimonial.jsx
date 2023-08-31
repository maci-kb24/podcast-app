// import illustration from "../../assets/images/illustation.svg";
import Ideas from "../../assets/images/ideas.png";
import "./testimonial.css";
import ArrowLeft from "../../assets/images/icons/Arrow - Left Circle.png";
import ArrowRight from "../../assets/images/icons/Arrow - Right Circle.png";
import ScribbleRed from "../../assets/images/icons/Scribblered.png";
import ScribbleVector from "../../assets/images/icons/ScribbleVector.png";
import Illustration from "../../assets/images/illustration.svg";
import Avatar from "../../assets/images/avatar.png";
import ShopifyVector from "../../assets/images/icons/shopify_vector.png";

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
            <div style={{ textAlign: "center" }}>
              <h1>
                Talk. Listen. Get inspired
                <br /> by every minute of it.
              </h1>
            </div>
            <div className="grid testimonial-content">
              <div>
                <img src={Illustration} alt="illustation" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio.
                </p>
              </div>
              <div>
                <img
                  src={Ideas}
                  alt="ideas"
                  style={{ padding: "58px 62px 57px 63px" }}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio.
                </p>
              </div>
            </div>
          </div>
          <div className="testimonial-quote">
            <div>
              <p
                style={{
                  fontSize: "63px",
                  color: "#cd4631",
                  fontWeight: "700",
                }}
              >
                &ldquo;
              </p>
              <h2>
                One of the best daily podcasts that
                <br /> covers every topic on Spotify.
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "36px",
                alignItems: "center",
              }}
            >
              <img src={Avatar} width={78} height={78} />
              <div>
                <p style={{ paddingLeft: "19px" }}>John Smith</p>
              </div>
              <div style={{ padding: "0px 10px" }}>
                <img src={ShopifyVector} />
              </div>
              <span style={{ fontWeight: "bold" }}>
                Social Community Manager
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-bottom">
        <div>
          <img
            src={ScribbleVector}
            style={{ margin: "0 auto", transform: "translateY(-70px)" }}
          />
        </div>
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
        </div>
        <div
          className="testimonial-arrows"
          style={{
            paddingBottom: "90px",
            paddingTop: "60px",
            marginLeft: "140px",
            display: "flex",
          }}
        >
          <img
            src={ArrowLeft}
            alt="arrow-left"
            style={{ marginRight: "20px" }}
          />
          <img src={ArrowRight} alt="arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
