import PropTypes from "prop-types";
import "./episodecard.css";

const EpisodeCard = ({ title, image, episodeNumber }) => {
  return (
    <div className="episode-card">
      <div style={{ display: "flex" }}>
        <div>
          <img src={image} alt={title} width={"40%"} />
          <p>Tag</p>
          <p>Tag</p>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <p>Eps. {episodeNumber}</p>
          <h3>{title}</h3>
          <hr />
          <p>Hosted by: Author</p>
        </div>
      </div>
    </div>
  );
};

EpisodeCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  episodeNumber: PropTypes.number,
  subtitle: PropTypes.string,
  // You can add more prop types here as needed
};

export default EpisodeCard;
