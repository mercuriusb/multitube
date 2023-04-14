import React, { useState } from "react";
import "./App.css";
import Control from "./components/control";
import Grid from "./components/grid";

function App() {
  const [urls, setUrls] = useState([
    { "url": "https://www.youtube.com/watch?v=wnSaZdikWB0", "desc": "Main" },
    { "url": "https://www.youtube.com/watch?v=Xo8_xQAA7AY", "desc": "#44 BMW Junior Team" },
    { "url": "https://www.youtube.com/watch?v=A87k-XSIgAo", "desc": "#102 Black Falcon Porsche" },
    { "url": "https://www.youtube.com/watch?v=U579l9WUolo", "desc": "#4 Falken Motorsport Porsche" },
    { "url": "https://www.youtube.com/watch?v=JrrwxStuouc", "desc": "#3 Falken Motorsport Porsche" },
    { "url": "", "desc": "" }
  ]);

  let initPlayState = []
  let initVolumeState = []
  let refs = []
  for (let i = 0; i < urls.length; i++) {
    initPlayState.push(false)
    initVolumeState.push(0.0)
    refs.push(React.createRef())
  }
  initVolumeState[0] = 1.0

  const [playState, setPlayState] = useState(initPlayState);
  const [volumeState] = useState(initVolumeState);
  const [gridMode, setGridMode] = useState(-1)


  return (
    <div className="App h-full min-h-full flex flex-col bg-black">
      <Control urls={urls} setUrls={setUrls} playState={playState} setPlayState={setPlayState} setGridMode={setGridMode} refs={refs} />
      <Grid urls={urls} playState={playState} setPlayState={setPlayState} volumeState={volumeState} gridMode={gridMode} refs={refs} />
    </div>
  );
}
export default App;
