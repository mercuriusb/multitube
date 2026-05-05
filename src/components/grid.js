import React from "react";
import Player from "./Player";
import { GRID_MODE, pickLayout } from "../config/layouts";

// Tailwind JIT braucht Klassen als Literale — daher statisches Mapping.
const GRID_COLS_CLASS = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  12: "grid-cols-12",
};

function Cell({ children, span }) {
  return (
    <div className={`bg-black overflow-hidden min-w-0 min-h-0 ${span ?? ""}`}>
      {children}
    </div>
  );
}

function LayoutGrid({ layout, streams, playState, volumeState, onPlayChange, refs }) {
  const colsClass = GRID_COLS_CLASS[layout.cols] ?? "grid-cols-1";
  // Keine grid-rows — analog Master: implizite Reihen aus row-span-Werten.
  return (
    <div className={`bg-black gap-1 h-[95%] grid ${colsClass}`}>
      {layout.cells.map((c, idx) => {
        if (c.empty) return <Cell key={`e-${idx}`} span={c.span} />;
        const stream = streams[c.i];
        if (!stream) return null;
        return (
          <Cell key={`${stream.id}-${idx}`} span={c.span}>
            <Player
              ref={refs[c.i]}
              url={stream.url}
              playing={playState[c.i]}
              volume={volumeState[c.i]}
              index={c.i}
              onPlayChange={onPlayChange}
            />
          </Cell>
        );
      })}
    </div>
  );
}

function SingleStream({ stream, index, playing, volume, onPlayChange, playerRef }) {
  return (
    <div className="bg-black gap-1 flex-1 grid grid-cols-1">
      <Cell>
        <Player
          ref={playerRef}
          url={stream.url}
          playing={playing}
          volume={volume}
          index={index}
          onPlayChange={onPlayChange}
        />
      </Cell>
    </div>
  );
}

function Grid({ streams, playState, setPlayState, volumeState, gridMode, refs }) {
  const handlePlayChange = React.useCallback(
    (index, value) => {
      setPlayState((prev) => {
        if (prev[index] === value) return prev;
        const next = [...prev];
        next[index] = value;
        return next;
      });
    },
    [setPlayState],
  );

  if (gridMode >= 0) {
    const stream = streams[gridMode];
    if (!stream) return null;
    return (
      <SingleStream
        stream={stream}
        index={gridMode}
        playing={playState[gridMode]}
        volume={volumeState[gridMode]}
        onPlayChange={handlePlayChange}
        playerRef={refs[gridMode]}
      />
    );
  }

  const layout = pickLayout(gridMode, streams.length);
  if (!layout) return null;

  const effectiveLayout =
    gridMode === GRID_MODE.ONBOARDS && streams.length === 1
      ? pickLayout(GRID_MODE.OVERVIEW, 1)
      : layout;

  return (
    <LayoutGrid
      layout={effectiveLayout}
      streams={streams}
      playState={playState}
      volumeState={volumeState}
      onPlayChange={handlePlayChange}
      refs={refs}
    />
  );
}

export default Grid;
