import EpisodeCard from "./EpisodeCard/EpisodeCard";
import Cover1 from "../../../assets/images/cover1.png";
import "./recentepisodes.css";
import Button from "../../Button/Button";

const RecentEpisodes = () => {
  const episodes = [
    {
      id: 1,
      title: "Are you a Perplexed Mind Person?",
      image: Cover1,
      episodeNumber: 1,
    },
    {
      id: 2,
      title: "Are you a Perplexed Mind Person?",
      image: Cover1,
      episodeNumber: 2,
    },
    {
      id: 3,
      title: "Are you a Perplexed Mind Person?",
      image: Cover1,
      episodeNumber: 3,
    },
    {
      id: 4,
      title: "Are you a Perplexed Mind Person?",
      image: Cover1,
      episodeNumber: 4,
    },
    {
      id: 5,
      title: "Are you a Perplexed Mind Person?",
      image: Cover1,
      episodeNumber: 5,
    },
    {
      id: 6,
      title: "Are you a Perplexed Mind Person?",
      image: Cover1,
      episodeNumber: 6,
    },
  ];
  return (
    <section>
      <div className="container">
        <h3>Recent Episodes</h3>
        <p>Available on your favorite platform</p>
        <div className="episodes-list">
          {episodes.map((episode) => (
            <EpisodeCard
              key={episode.id}
              title={episode.title}
              image={episode.image}
              episodeNumber={episode.episodeNumber}
              // other props
            />
          ))}
        </div>
        <div>
          <Button>Browse All Episodes</Button>
        </div>
      </div>
    </section>
  );
};

export default RecentEpisodes;
