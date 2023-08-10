// import illustration from "../../assets/images/illustation.svg";
import Ideas from "../../assets/images/ideas.png";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="testimonial-top">
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
              <img src={Ideas} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-middle">
          <div>
            <p></p>
            <h2>
              One of the best daily podcasts that covers every topic on Spotify.
            </h2>
          </div>
          <div>
            <span>John Smith,</span>
            <span>Social Community Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
