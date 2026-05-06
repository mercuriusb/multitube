import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import Control from "./components/control";
import Grid from "./components/grid";
import {
  availableLanguages,
  buildStreamList,
  loadStreamsConfig,
} from "./config/streams";
import { GRID_MODE } from "./config/layouts";

function App() {
  const [config, setConfig] = useState(null);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setError(null);
    loadStreamsConfig()
      .then((data) => { if (!cancelled) setConfig(data); })
      .catch((e) => { if (!cancelled) setError(e); });
    return () => { cancelled = true; };
  }, [reloadKey]);

  if (error) {
    return (
      <div className="App h-full min-h-full flex flex-col items-center justify-center bg-black text-white gap-4">
        <div>Stream-Konfiguration konnte nicht geladen werden.</div>
        <div className="text-sm text-gray-400">{error.message}</div>
        <button
          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
          onClick={() => setReloadKey((k) => k + 1)}
        >
          Erneut versuchen
        </button>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="App h-full min-h-full flex items-center justify-center bg-black text-white">
        Lade Streams …
      </div>
    );
  }

  return <Loaded config={config} />;
}

function Loaded({ config }) {
  const [language, setLanguage] = useState(config.defaultLanguage ?? "en");
  const streams = useMemo(() => buildStreamList(config, language), [config, language]);
  const languages = useMemo(() => availableLanguages(config), [config]);

  const [playState, setPlayState] = useState(() => streams.map(() => false));
  const [volumeState] = useState(() => streams.map((_, i) => (i === 0 ? 1.0 : 0.0)));
  const [gridMode, setGridMode] = useState(GRID_MODE.OVERVIEW);

  // Stabile Refs über Renderzyklen hinweg.
  const refsRef = useRef(null);
  if (refsRef.current === null || refsRef.current.length !== streams.length) {
    const prev = refsRef.current ?? [];
    refsRef.current = streams.map((_, i) => prev[i] ?? React.createRef());
  }
  const refs = refsRef.current;

  // react-player v3: refs zeigen auf ein HTMLVideoElement-kompatibles Element.
  // Für Live-Streams ist das Ende der seekable-Range die Live-Edge. Bei VODs
  // ist das schlicht das Ende — für echte Live-Inhalte das gewünschte Verhalten.
  const seekAllToLive = useCallback(() => {
    refs.forEach((r) => {
      const v = r.current;
      if (!v) return;
      try {
        if (v.seekable && v.seekable.length > 0) {
          v.currentTime = v.seekable.end(v.seekable.length - 1);
        } else if (Number.isFinite(v.duration)) {
          v.currentTime = v.duration;
        }
      } catch { /* Player noch nicht bereit */ }
    });
  }, [refs]);

  return (
    <div className="App h-full min-h-full flex flex-col bg-black">
      <Control
        streams={streams}
        playState={playState}
        setPlayState={setPlayState}
        gridMode={gridMode}
        setGridMode={setGridMode}
        language={language}
        setLanguage={setLanguage}
        languages={languages}
        externalLinks={config.externalLinks ?? []}
        onSeekToLive={seekAllToLive}
      />
      <Grid
        streams={streams}
        playState={playState}
        setPlayState={setPlayState}
        volumeState={volumeState}
        gridMode={gridMode}
        refs={refs}
      />
    </div>
  );
}

export default App;
