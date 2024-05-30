import React, { useState } from "react";
import "./App.css";
import Control from "./components/control";
import Grid from "./components/grid";

function App() {
  const enURL = "https://www.youtube.com/watch?v=S6WUYLDJHfU&list=PL1tySj0KEznT97a73-94JSu4OoH2OZ7Oi&index=1&pp=iAQB&origin=https://racecams.pages.dev" //quali 1         30.5 12:55
//  const enURL = "https://www.youtube.com/watch?v=m4V0P8siYAg&list=PL1tySj0KEznT97a73-94JSu4OoH2OZ7Oi&index=2&pp=iAQB&origin=https://racecams.pages.dev" //quali 2              30.5 19:55
//  const enURL = "https://www.youtube.com/watch?v=kYFPyX-ZL1o&list=PL1tySj0KEznT97a73-94JSu4OoH2OZ7Oi&index=3&pp=iAQB&origin=https://racecams.pages.dev" //quali 3              31.5 13:25
//  const enURL = "https://www.youtube.com/watch?v=dhaq3DdU_wo&list=PL1tySj0KEznT97a73-94JSu4OoH2OZ7Oi&index=4&pp=iAQB&origin=https://racecams.pages.dev" //top quali draew      31.5 16:00
//  const enURL = "https://www.youtube.com/watch?v=ny3aGeC5Fdg&list=PL1tySj0KEznT97a73-94JSu4OoH2OZ7Oi&index=5&pp=iAQB&origin=https://racecams.pages.dev" //top quali            31.5 17:25
//  const enURL = "https://www.youtube.com/watch?v=lAcLSbWhVEs&list=PL1tySj0KEznT97a73-94JSu4OoH2OZ7Oi&index=6&pp=iAQB&origin=https://racecams.pages.dev" //race                 01.6 08:45
  const deURL = "https://www.youtube.com/watch?v=CyXzTK_bFSU&list=PL1tySj0KEznQaLr6cIouU7x4uNvK5qJE9&index=1&pp=iAQB&origin=https://racecams.pages.dev" //quali 1 & 2     30.5 12:55
//  const deURL = "https://www.youtube.com/watch?v=twz1ljfcKaI&list=PL1tySj0KEznQaLr6cIouU7x4uNvK5qJE9&index=2&pp=iAQB&origin=https://racecams.pages.dev" //quali 3 & top quali  31.5 13:25
//  const deURL = "https://www.youtube.com/watch?v=dhaq3DdU_wo&list=PL1tySj0KEznQaLr6cIouU7x4uNvK5qJE9&index=3&pp=iAQB&origin=https://racecams.pages.dev" //top quali draw       31.5 16:00
//  const deURL = "https://www.youtube.com/watch?v=iFXqRazVs60&list=PL1tySj0KEznQaLr6cIouU7x4uNvK5qJE9&index=4&pp=iAQB&origin=https://racecams.pages.dev" //race                 01.6 08:15
  const [urls, setUrls] = useState([
    { "key": "1",  "url": enURL, "desc": "Main" },
    { "key": "2",  "url": "https://youtu.be/knV_q1-d00I", "desc": "Pitlane" },
    { "key": "3",  "url": "https://www.youtube.com/watch?v=tcAE5bCfoR4&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=12&pp=iAQB&origin=https://racecams.pages.dev", "desc": "004" },
    { "key": "4",  "url": "https://www.youtube.com/watch?v=Fu8QSwM-ugQ&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=10&pp=iAQB&origin=https://racecams.pages.dev", "desc": "005" },
    { "key": "5",  "url": "https://www.youtube.com/watch?v=GndcSjLFLuM&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=5&pp=iAQB&origin=https://racecams.pages.dev", "desc":  "015" },
    { "key": "6",  "url": "https://www.youtube.com/watch?v=1gYh_Fft1Mo&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=13&pp=iAQB&origin=https://racecams.pages.dev", "desc": "016" },
    { "key": "7",  "url": "https://www.youtube.com/watch?v=6p-yZf_kuHI&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=9&pp=iAQB&origin=https://racecams.pages.dev", "desc":  "033" },
    { "key": "8",  "url": "https://www.youtube.com/watch?v=vjDFvNFhjm8&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=11&pp=iAQB&origin=https://racecams.pages.dev", "desc": "044" },
    { "key": "9",  "url": "https://www.youtube.com/watch?v=hWc4-zg7kDQ&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=4&pp=iAQB&origin=https://racecams.pages.dev", "desc":  "050" },
    { "key": "10", "url": "https://www.youtube.com/watch?v=eTDMNG7qP5E&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=8&pp=iAQB&origin=https://racecams.pages.dev", "desc":  "072" },
    { "key": "11", "url": "https://www.youtube.com/watch?v=YtShNztM1IM&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=7&pp=iAQB&origin=https://racecams.pages.dev", "desc":  "088" },
    { "key": "12", "url": "https://www.youtube.com/watch?v=fgU5p9tl1y0&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=2&pp=iAQB&origin=https://racecams.pages.dev", "desc":  "130" },
    { "key": "13", "url": "https://www.youtube.com/watch?v=S-HwyYiyq9A&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=3&pp=iAQB&origin=https://racecams.pages.dev", "desc":  "227" },
    { "key": "14", "url": "https://www.youtube.com/watch?v=LKVeGBDCwd8&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=1&pp=iAQB&origin=https://racecams.pages.dev", "desc":  "830" },
    { "key": "15", "url": "https://www.youtube.com/watch?v=fapTclFkixI&list=PL1tySj0KEznQXuhFk9cVx8PZyFwRJfh3i&index=14&pp=iAQB&origin=https://racecams.pages.dev", "desc": "911" }
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
