import Scribble from "../../../assets/images/icons/Scribble1.png";
import Vector from "../../../assets/images/icons/Vector1.png";
import ShiningStars from "../../../assets/images/icons/Shining stars.png";
import Face from "../../../assets/images/icons/Face 1.png";
import FaceOne from "../../../assets/images/icons/Face 5.png";
import Fire from "../../../assets/images/icons/Fire.png";
import Star from "../../../assets/images/icons/Star.png";
import "./membership.css";
import Button from "../../Button/Button";

const Membership = () => {
  return (
    <section className="membership">
      <img src={Scribble} />
      <div className="container">
        <div className="membership-heading">
          <h1>Membership benefits</h1>
          <p>Become our sponsor and get all benefits</p>
        </div>
        <div className="membership-cards">
          <div className="membership-card">
            <img src={Vector} />
            <h3>Topic by Request</h3>
            <p>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className="membership-card">
            <img src={ShiningStars} />
            <h3>Exclusive Content</h3>
            <p>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className="membership-card">
            <img src={Face} />
            <h3>Join the Community</h3>
            <p>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className="break-row"></div>
          <div className="membership-card">
            <img src={FaceOne} />
            <h3>Livestreaming Access</h3>
            <p>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className="membership-card">
            <img src={Fire} />
            <h3>Exclusive Episodes & Merch</h3>
            <p>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className="membership-card">
            <img src={Star} />
            <h3>And much more!</h3>
            <p>
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
        </div>
        <div className="membership-btn">
          <Button>See Pricing</Button>
        </div>
      </div>
    </section>
  );
};

export default Membership;
