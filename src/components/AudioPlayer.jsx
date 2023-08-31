import { useRef, useState } from "react";
import Controls from "./Controls";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const rewind = () => {
    const audio = audioRef.current;
    audio.currentTime -= 15;
  };

  const forward = () => {
    const audio = audioRef.current;
    audio.currentTime += 15;
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
      />
      <Controls
        isPlaying={isPlaying}
        onPlayPause={togglePlay}
        onRewind={rewind}
        onForward={forward}
      />
    </div>
  );
};

export default AudioPlayer;
