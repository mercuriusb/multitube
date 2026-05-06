import React, { useMemo } from "react";
import { FaPause, FaPlay, FaCircle } from "react-icons/fa";
import { GRID_MODE } from "../config/layouts";

const Divider = () => (
  <div className="self-stretch w-px bg-gray-700 mx-1 my-1.5" />
);

function IconButton({ onClick, active, hidden, children, className = "", title }) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`
        shrink-0 flex items-center gap-1.5 px-3 py-1 rounded text-sm font-medium
        transition-colors duration-150
        ${hidden ? "invisible " : ""}
        ${active
          ? "bg-gray-600 text-white hover:bg-gray-500"
          : "text-gray-300 hover:bg-gray-800 hover:text-white"
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}

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
      setPlayState((prev) => {
        if (prev[value]) return prev;
        const next = [...prev];
        next[value] = true;
        return next;
      });
    }
  };

  const onboardsHidden = gridMode >= 0;

  return (
    <div className="flex flex-row items-center gap-1 px-2 h-12 bg-gray-950 border-b border-red-900 shrink-0">

      {/* Play controls */}
      <IconButton onClick={togglePlayAll} active={isPlayAll}>
        {isPlayAll ? <FaPause size={11} /> : <FaPlay size={11} />}
        All
      </IconButton>

      <IconButton onClick={togglePlayOnboards} active={isPlayOnboards} hidden={onboardsHidden}>
        {isPlayOnboards ? <FaPause size={11} /> : <FaPlay size={11} />}
        Onboards
      </IconButton>

      {/* Live button */}
      <IconButton onClick={onSeekToLive} title="Alle Streams an die Live-Position spulen">
        <FaCircle size={8} className="text-red-500" />
        Live
      </IconButton>

      <Divider />

      {/* View selector */}
      <select
        aria-label="View mode"
        value={String(gridMode)}
        onChange={changeGridMode}
        className="bg-gray-800 text-gray-200 text-sm rounded px-2 py-1 border border-gray-700 focus:outline-none focus:border-gray-500 cursor-pointer hover:bg-gray-700 transition-colors duration-150"
      >
        <option value={String(GRID_MODE.OVERVIEW)}>All streams</option>
        <option value={String(GRID_MODE.ONBOARDS)}>Onboards only</option>
        {streams.map((s, i) => (
          <option key={s.id} value={String(i)}>
            {s.desc}
          </option>
        ))}
      </select>

      {/* Spacer */}
      <div className="flex-1" />

      {/* External links */}
      {externalLinks.filter((l) => l && l.label && l.href).length > 0 && (
        <>
          <div className="flex items-center gap-4">
            {externalLinks
              .filter((l) => l && l.label && l.href)
              .map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-150"
                >
                  {l.label}
                </a>
              ))}
          </div>
          {languages.length > 0 && <Divider />}
        </>
      )}

      {/* Language toggle */}
      {languages.length > 1 && (
        <div className="flex items-center gap-0.5 bg-gray-800 rounded p-0.5">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-2.5 py-0.5 rounded text-xs font-medium uppercase tracking-wide transition-colors duration-150 ${
                language === lang
                  ? "bg-gray-600 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Control;
