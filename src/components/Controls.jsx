const Controls = ({ isPlaying, onPlayPause, onRewind, onForward }) => {
  return (
    <div>
      <button onClick={onRewind}>Rewind</button>
      <button onClick={onPlayPause}>{isPlaying ? "Pause" : "Play"}</button>;
      <button onClick={onForward}>Forward</button>
    </div>
  );
};

export default Controls;
