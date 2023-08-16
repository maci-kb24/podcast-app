import PropTypes from "prop-types";

const EpisodeCard = ({ title, image, episodeNumber }) => {
  return (
    <div className="episode-card">
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>Eps. {episodeNumber}</p>
        <hr />
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
