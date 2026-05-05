import React, { forwardRef, memo, useCallback } from "react";
import ReactPlayer from "react-player";

// Gewrappter ReactPlayer. Memoized, damit das Setzen von playState[i]
// nur den betroffenen Player neu rendert (ReactPlayer ist teuer, weil er
// eine Iframe-API nachlädt).
//
// `onPlayChange` bekommt (index, value) — die Bindung des Index passiert
// hier intern, damit der Parent eine stabile Callback-Referenz übergeben
// kann und memo nicht jedes Mal greift.
const Player = memo(forwardRef(function Player(
  { url, playing, volume, index, onPlayChange },
  ref,
) {
  const handlePlay = useCallback(() => onPlayChange(index, true), [onPlayChange, index]);
  const handlePause = useCallback(() => onPlayChange(index, false), [onPlayChange, index]);
  return (
    <ReactPlayer
      ref={ref}
      url={url}
      width="100%"
      height="100%"
      volume={volume}
      playing={playing}
      controls
      onPlay={handlePlay}
      onPause={handlePause}
    />
  );
}));

export default Player;
