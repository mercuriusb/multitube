import React, { useState } from "react";
import "./App.css";
import Control from "./components/control";
import Grid from "./components/grid";

function App() {
  const enURL = "https://www.youtube.com/watch?v=X6_YvHzlRIg"
  const deURL = ""
  const [urls, setUrls] = useState([
    { "url": enURL, "desc": "Main" },
    { "url": "https://www.youtube.com/watch?v=g3qM7KlaV7w", "desc": "#01" },
    { "url": "https://www.youtube.com/watch?v=04E37ZIkHLY", "desc": "#22" },
    { "url": "https://www.youtube.com/watch?v=wiffjEBuUzU", "desc": "#03" },
    { "url": "https://www.youtube.com/watch?v=hSDzxqgW0gs", "desc": "#04" },
    { "url": "https://www.youtube.com/watch?v=OQFCwWo85Po", "desc": "#39" },
    { "url": "https://www.youtube.com/watch?v=KwLf_9vB21U", "desc": "#33" },
    { "url": "https://www.youtube.com/watch?v=0RHJ4wbVR5Y", "desc": "#72" },
    { "url": "https://www.youtube.com/watch?v=uFRUL8WtODM", "desc": "#44" },
    { "url": "https://www.youtube.com/watch?v=SKyveaplOkY", "desc": "#96" },
    { "url": "https://www.youtube.com/watch?v=V0V3TKdnY9Q", "desc": "#98" },
    { "url": "https://www.youtube.com/watch?v=51edyVGnUfo", "desc": "#911" },
    { "url": "https://www.youtube.com/watch?v=8ZlUkUcawSI", "desc": "#40" },
    { "url": "https://www.youtube.com/watch?v=Z_kswkwhVsI", "desc": "#272" },
    { "url": "https://www.youtube.com/watch?v=X56MGNw8EWQ", "desc": "#830" }
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
