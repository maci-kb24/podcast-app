import Button from "../../Button/Button";
import "./homesponsor.css";

const HomeSponsor = () => {
  return (
    <section className="sponsor">
      <div className="container">
        <div>
          <h1>Become our sponsor</h1>
          <h3>Get exclusive episodes, merch and more</h3>
        </div>
        <div className="sponsor-grid grid">
          <div className="sponsor-card">
            <div
              style={{
                padding: "60px 40px 30px 40px",
                border: "1px solid black",
              }}
            >
              <h2>Member</h2>
              <p>
                Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
                tempor.
              </p>
              <div>
                <Button />
                <p>
                  $9.99 <br />
                  /month
                </p>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                padding: "40px 40px 96px 40px",
                border: "1px solid black",
              }}
            >
              <p>What’s included:</p>
              <ul>
                <li>Exclusive Content</li>
                <li>5% Discount on Merch</li>
                <li>Livestreaming Access</li>
              </ul>
            </div>
          </div>
          <div className="sponsor-card">
            <div
              style={{
                padding: "60px 40px 30px 40px",
                border: "1.5px solid #cd4631",
                backgroundColor: "#f7ede8",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <h2>Family</h2>
                <p
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "12px",
                    padding: "6px",
                    borderRadius: "5px",
                  }}
                >
                  MOST POPULAR
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
                tempor.
              </p>
              <div>
                <Button />
                <p>
                  $14.99 <br />
                  /month
                </p>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                padding: "40px 40px 47px 40px",
                border: "1.5px solid #cd4631",
                backgroundColor: "#f7ede8",
              }}
            >
              <p>What’s included:</p>
              <ul>
                <li>
                  <strong>Everything in Tier 1</strong>
                </li>
                <li>Free tickets to Events</li>
                <li>Limited Edition Merch</li>
                <li>Promote your Product</li>
                <li>Request Topic</li>
              </ul>
            </div>
          </div>
          <div className="sponsor-card">
            <div
              style={{
                padding: "60px 40px 30px 40px",
                border: "1px solid black",
              }}
            >
              <h2>Official</h2>
              <p>
                Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
                tempor.
              </p>
              <div>
                <Button />
                <p>
                  $29.99 <br />
                  /month
                </p>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                padding: "40px 40px 20px 40px",
                border: "1px solid black",
              }}
            >
              <p>What’s included:</p>
              <ul>
                <li>
                  <strong>Everything in Tier 2</strong>
                </li>
                <li>Exclusive Badge on Livestreaming</li>
                <li>Become an Official Sponsor</li>
                <li>Early Access to All Episodes</li>
                <li>Free Stikers and Merch</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSponsor;
