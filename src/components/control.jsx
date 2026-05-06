import React, { useMemo } from "react";
import { FaPause, FaPlay, FaCircle } from "react-icons/fa";
import { GRID_MODE } from "../config/layouts";

const BUTTON_CLASS =
  "shrink-0 inline-block px-4 py-2 mx-4 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out";

const SELECT_CLASS =
  "form-select form-select-sm appearance-none block w-full px-2 py-0.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

function Control({
  streams,
  playState,
  setPlayState,
  gridMode,
  setGridMode,
  language,
  setLanguage,
  languages,
  externalLinks,
  onSeekToLive,
}) {
  // Aus dem playState abgeleitete Anzeigezustände — useMemo statt useEffect+
  // useState, weil sie eine reine Ableitung sind.
  const isPlayAll = useMemo(() => playState.every(Boolean), [playState]);
  const isPlayOnboards = useMemo(
    () => playState.length > 1 && playState.slice(1).every(Boolean),
    [playState],
  );

  const togglePlayAll = () => {
    const target = !isPlayAll;
    setPlayState(playState.map(() => target));
  };

  const togglePlayOnboards = () => {
    const target = !isPlayOnboards;
    setPlayState(playState.map((v, i) => (i === 0 ? v : target)));
  };

  const changeGridMode = (event) => {
    const value = parseInt(event.target.value, 10);
    setGridMode(value);
    if (value >= 0) {
      // Einzel-Stream: diesen Stream automatisch starten.
      setPlayState((prev) => {
        if (prev[value]) return prev;
        const next = [...prev];
        next[value] = true;
        return next;
      });
    }
  };

  const onboardsButtonHidden = gridMode >= 0;

  return (
    <div className="flex flex-row justify-start justify-items-center py-2 h-11 justify-center bg-black">
      <button type="button" className={BUTTON_CLASS} onClick={togglePlayAll}>
        {isPlayAll ? (
          <FaPause className="inline-block mx-1 align-baseline" />
        ) : (
          <FaPlay className="inline-block mx-1 align-baseline" />
        )}{" "}
        All
      </button>

      <button
        type="button"
        className={`${onboardsButtonHidden ? "invisible " : ""}${BUTTON_CLASS}`}
        onClick={togglePlayOnboards}
      >
        {isPlayOnboards ? (
          <FaPause className="inline-block mx-1 align-baseline" />
        ) : (
          <FaPlay className="inline-block mx-1 align-baseline" />
        )}{" "}
        Onboard cams
      </button>

      <button
        type="button"
        className={BUTTON_CLASS}
        onClick={onSeekToLive}
        title="Alle Streams an die Live-Position spulen"
      >
        <FaCircle className="inline-block mx-1 align-baseline text-red-500" />{" "}
        Live
      </button>

      <div className="flex justify-center">
        <div className="mb-0 xl:w-96">
          <select
            className={SELECT_CLASS}
            aria-label="View mode"
            value={String(gridMode)}
            onChange={changeGridMode}
          >
            <option value={String(GRID_MODE.OVERVIEW)}>All</option>
            <option value={String(GRID_MODE.ONBOARDS)}>Onboards</option>
            {streams.map((s, i) => (
              <option key={s.id} value={String(i)}>
                {s.desc}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="ml-auto mr-5 mt-2">
        {externalLinks
          .filter((l) => l && l.label && l.href)
          .map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-white ml-5"
            >
              {l.label}
            </a>
          ))}
        {languages.map((lang, i) => (
          <button
            key={lang}
            className={`text-white ${i === 0 ? "ml-10" : "ml-2"} ${
              language === lang ? "underline" : ""
            }`}
            onClick={() => setLanguage(lang)}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Control;
