// import illustration from "../../assets/images/illustation.svg";
import Ideas from "../../assets/images/ideas.png";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-top">
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
        <div className="testimonial-bottom-heading">
          <h1>What our listeners say</h1>
          <p>Their experience throughout every platform</p>
        </div>
        <div className="testimonial-cards"></div>
      </div>
    </div>
  );
};

export default Testimonial;
