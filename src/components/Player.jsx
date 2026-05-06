import React, { forwardRef, memo, useCallback } from "react";
import ReactPlayer from "react-player";

// Gewrappter ReactPlayer (v3). Memoized, damit das Setzen von playState[i]
// nur den betroffenen Player neu rendert.
//
// react-player v3:
//   - prop `url` → `src`
//   - ref zeigt auf ein HTMLVideoElement (custom element für YouTube etc.)
//   - onPlay/onPause sind native MediaEvent-Handler
const Player = memo(forwardRef(function Player(
  { url, playing, volume, index, onPlayChange },
  ref,
) {
  const handlePlay = useCallback(() => onPlayChange(index, true), [onPlayChange, index]);
  const handlePause = useCallback(() => onPlayChange(index, false), [onPlayChange, index]);
  return (
    <ReactPlayer
      ref={ref}
      src={url}
      style={{ width: "100%", height: "100%" }}
      volume={volume}
      playing={playing}
      controls
      onPlay={handlePlay}
      onPause={handlePause}
    />
  );
}));

export default Player;
