import React, { useState } from "react";
import "./App.css";
import Control from "./components/control";
import Grid from "./components/grid";

function App() {
  const enURL = "https://www.youtube.com/watch?v=S6WUYLDJHfU&list=PL1tySj0KEznT97a73-94JSu4OoH2OZ7Oi&index=1&pp=iAQB" //quali 1         30.5 12:55
//  const enURL = "https://www.youtube.com/watch?v=m4V0P8siYAg&list=PL1tySj0KEznT97a73-94JSu4OoH2OZ7Oi&index=2&pp=iAQB" //quali 2              30.5 19:55
//  const enURL = "https://www.youtube.com/watch?v=kYFPyX-ZL1o&list=PL1tySj0KEznT97a73-94JSu4OoH2OZ7Oi&index=3&pp=iAQB" //quali 3              31.5 13:25
//  const enURL = "https://www.youtube.com/watch?v=dhaq3DdU_wo&list=PL1tySj0KEznT97a73-94JSu4OoH2OZ7Oi&index=4&pp=iAQB" //top quali draew      31.5 16:00
//  const enURL = "https://www.youtube.com/watch?v=ny3aGeC5Fdg&list=PL1tySj0KEznT97a73-94JSu4OoH2OZ7Oi&index=5&pp=iAQB" //top quali            31.5 17:25
//  const enURL = "https://www.youtube.com/watch?v=lAcLSbWhVEs&list=PL1tySj0KEznT97a73-94JSu4OoH2OZ7Oi&index=6&pp=iAQB" //race                 01.6 08:45
  const deURL = "https://www.youtube.com/watch?v=CyXzTK_bFSU&list=PL1tySj0KEznQaLr6cIouU7x4uNvK5qJE9&index=1&pp=iAQB" //quali 1 & 2     30.5 12:55
//  const deURL = "https://www.youtube.com/watch?v=twz1ljfcKaI&list=PL1tySj0KEznQaLr6cIouU7x4uNvK5qJE9&index=2&pp=iAQB" //quali 3 & top quali  31.5 13:25
//  const deURL = "https://www.youtube.com/watch?v=dhaq3DdU_wo&list=PL1tySj0KEznQaLr6cIouU7x4uNvK5qJE9&index=3&pp=iAQB" //top quali draw       31.5 16:00
//  const deURL = "https://www.youtube.com/watch?v=iFXqRazVs60&list=PL1tySj0KEznQaLr6cIouU7x4uNvK5qJE9&index=4&pp=iAQB" //race                 01.6 08:15
  const [urls, setUrls] = useState([
    { "url": enURL, "desc": "Main" },
    { "url": "https://youtu.be/knV_q1-d00I", "desc": "Pitlane" },
    { "url": "https://www.youtube.com/watch?v=tcAE5bCfoR4&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=12&pp=iAQB", "desc": " #04" },
    { "url": "https://www.youtube.com/watch?v=Fu8QSwM-ugQ&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=10&pp=iAQB", "desc": " #05" },
    { "url": "https://www.youtube.com/watch?v=GndcSjLFLuM&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=5&pp=iAQB", "desc":  " #15" },
    { "url": "https://www.youtube.com/watch?v=1gYh_Fft1Mo&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=13&pp=iAQB", "desc": " #16" },
    { "url": "https://www.youtube.com/watch?v=6p-yZf_kuHI&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=9&pp=iAQB", "desc":  " #33" },
    { "url": "https://www.youtube.com/watch?v=vjDFvNFhjm8&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=11&pp=iAQB", "desc": " #44" },
    { "url": "https://www.youtube.com/watch?v=hWc4-zg7kDQ&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=4&pp=iAQB", "desc":  " #50" },
    { "url": "https://www.youtube.com/watch?v=eTDMNG7qP5E&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=8&pp=iAQB", "desc":  " #72" },
    { "url": "https://www.youtube.com/watch?v=YtShNztM1IM&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=7&pp=iAQB", "desc":  " #88" },
    { "url": "https://www.youtube.com/watch?v=fgU5p9tl1y0&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=2&pp=iAQB", "desc":  "#130" },
    { "url": "https://www.youtube.com/watch?v=S-HwyYiyq9A&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=3&pp=iAQB", "desc":  "#227" },
    { "url": "https://www.youtube.com/watch?v=LKVeGBDCwd8&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=1&pp=iAQB", "desc":  "#830" },
    { "url": "https://www.youtube.com/watch?v=fapTclFkixI&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=14&pp=iAQB", "desc": "#911" }
    //{ "url": "https://www.youtube.com/watch?v=skeuVsHVauQ", "desc": "GPS" }
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
      <Control urls={urls} setUrls={setUrls} playState={playState} setPlayState={setPlayState} setGridMode={setGridMode} refs={refs} enURL={enURL} deURL={deURL}/>
      <Grid urls={urls} playState={playState} setPlayState={setPlayState} volumeState={volumeState} gridMode={gridMode} refs={refs} />
    </div>
  );
}
export default App;
