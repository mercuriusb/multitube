import React, { useState } from "react";
import "./App.css";
import Control from "./components/control";
import Grid from "./components/grid";

function App() {
//  const enURL = "https://www.youtube.com/live/3Klx4tuNycA?si=iBqlgT0V-KSVTtxB" //quali 1
//  const enURL = "https://www.youtube.com/live/R8Ext8hsyU8?si=w8JCw4YJ_u0t7AKo" //quali 2
  const enURL = "https://www.youtube.com/live/G6DhWhXCHc0?si=BLSj2Am3L55ewZfy" //top quali
//  const enURL = "https://www.youtube.com/live/n18gSbqRmis?si=R8jfnugceySrA1Gq&origin=https://racecams.pages.dev" //race

//  const deURL = "https://www.youtube.com/live/rne2VW35QaQ?si=Xb4VQWwANJfQInVa" //quali 1 & 2
  const deURL = "https://www.youtube.com/live/BWoy0e38nZ8?si=ZiPtMZYwE2knUvEV" //quali 3 & top quali
//  const deURL = "https://www.youtube.com/live/Nt7ewGmnN9g?si=EAmYkFTc_rxjVxnI" //race
  const [urls, setUrls] = useState([
    { "key": "1",  "url": enURL, "desc": "Main" },
    { "key": "2",  "url": "https://www.youtube.com/live/g-ioq7t0qgc?si=mt0y7DrHCZ-PNm0y&origin=https://racecams.pages.dev"  , "desc": "001 Scherer" },
    { "key": "3",  "url": "https://www.youtube.com/live/ZEPAuItPQSI?si=s69nUkKg5dofoeeg&origin=https://racecams.pages.dev"  , "desc": "027 Abt" },
    { "key": "4",  "url": "https://www.youtube.com/live/cHTdu9Yfwp8?si=GwjlzvLPz7Jp7HRe&origin=https://racecams.pages.dev"  , "desc": "033 Falken" },
    { "key": "5",  "url": "https://www.youtube.com/live/7z-zTI3TDaQ?si=UuNXGrRpAPPttu1V&origin=https://racecams.pages.dev"  , "desc": "044 Falken" },
    { "key": "6",  "url": "https://www.youtube.com/live/9EIuC_v_lQg?si=xZ9oppxBqOMvt4-3&origin=https://racecams.pages.dev"  , "desc": "014 Getspeed" },
    { "key": "7",  "url": "https://www.youtube.com/live/buy2LRHcA-0?si=pBqrvX5g7F845_mv&origin=https://racecams.pages.dev"  , "desc": "016 Scherer" },
    { "key": "8",  "url": "https://www.youtube.com/live/6H-rKAzI3vc?si=PsABUcD9H7W_bH2N&origin=https://racecams.pages.dev"  , "desc": "017 Team Bilstein" },
    { "key": "9",  "url": "https://www.youtube.com/live/7HN3AqMeMc0?si=bnH8LDO2gHatvljX&origin=https://racecams.pages.dev"  , "desc": "088 Subraru" },
    { "key": "10", "url": "https://www.youtube.com/live/67LVtQD0C6w?si=He4AENvYiCQ4U2go&origin=https://racecams.pages.dev"  , "desc": "911 Manthey" },
    { "key": "11", "url": "https://www.youtube.com/live/ULia3lLKoEA?si=Bx7uDZosFjjjkDhj&origin=https://racecams.pages.dev"  , "desc": "098 Rowe" },
    { "key": "12", "url": "https://www.youtube.com/live/L2YCMfWy5NU?si=nPvx7oB_U0XMcE3P&origin=https://racecams.pages.dev"  , "desc": "110 Toyota" },
    { "key": "13", "url": "https://www.youtube.com/live/1UXH_VjSwSg?si=tHCvxEHNOX87z0GH&origin=https://racecams.pages.dev"  , "desc": "109 Toyota" },
    { "key": "14", "url": "https://www.youtube.com/live/ek6irpP4E-I?si=gOemWNjbZrgcRrFT&origin=https://racecams.pages.dev"  , "desc": "830 Hyundai" },
    { "key": "15", "url": "https://www.youtube.com/live/Qg3YgjaZIoU?si=7DUmXmtFN-X7w0ec&origin=https://racecams.pages.dev"  , "desc": "019 Kruse" },
    { "key": "16", "url": "https://www.youtube.com/live/lmZ1pSiZi48?si=chO4Bg9D-p3eQgXA&origin=https://racecams.pages.dev"  , "desc": "150 Bilstein" },
    { "key": "17", "url": "https://www.youtube.com/live/OVY5K0cbT5I?si=J_kf7WV3rAFQZEXd&origin=https://racecams.pages.dev"  , "desc": "718 Manthey" },
    { "key": "18", "url": "https://www.youtube.com/live/JlZP4NoKnhg?si=YJ2An5OhyEVX97iM&origin=https://racecams.pages.dev"  , "desc": "097 Saugmotoren" },
    { "key": "19", "url": "https://www.youtube.com/live/VbNp7dSI-y0?si=WxJv5VYITVKSgjT0&origin=https://racecams.pages.dev"  , "desc": "013 White Angel" }
    //{ "key": "20", "url": "&origin=https://racecams.pages.dev"  , "desc": "Pitlane" },
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
