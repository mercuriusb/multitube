import React, { useState } from "react";
import "./App.css";
import Control from "./components/control";
import Grid from "./components/grid";

function App() {
//  const enURL = "https://www.youtube.com/live/m4V0P8siYAg?si=sWTNxIeOPawyL8Vc&origin=https://racecams.pages.dev" //quali 2              30.5 19:55
//  const enURL = "https://www.youtube.com/live/kYFPyX-ZL1o?si=k8WuoizqGhwi1NX_&origin=https://racecams.pages.dev" //quali 3              31.5 13:25
  const enURL = "https://www.youtube.com/live/ny3aGeC5Fdg?si=ULIZckSnUugTB2KQ&origin=https://racecams.pages.dev" //top quali            31.5 17:25
//  const enURL = "https://www.youtube.com/live/lAcLSbWhVEs?si=3dA2v4tDY1aolKsQB&origin=https://racecams.pages.dev" //race                 01.6 08:45

//  const deURL = "https://www.youtube.com/live/CyXzTK_bFSU?si=YGOT4K6PwRsXqehH&origin=https://racecams.pages.dev" //quali 1 & 2     30.5 12:55
  const deURL = "https://www.youtube.com/live/twz1ljfcKaI?si=jmU2IlYKLX9tk1Ka&origin=https://racecams.pages.dev" //quali 3 & top quali  31.5 13:25
//  const deURL = "https://www.youtube.com/live/iFXqRazVs60?si=VumoSUUwNDtqGRnh&origin=https://racecams.pages.dev" //race                 01.6 08:15
  const [urls, setUrls] = useState([
    { "key": "1",  "url": enURL, "desc": "Main" },
    { "key": "2",  "url": "https://www.youtube.com/live/tcAE5bCfoR4?si=9Ejv303yzNDl3z4l&origin=https://racecams.pages.dev" , "desc": "004" },
    { "key": "3",  "url": "https://www.youtube.com/live/Fu8QSwM-ugQ?si=xEbFyz8dZW41xyof&origin=https://racecams.pages.dev" , "desc": "005" },
    { "key": "4",  "url": "https://www.youtube.com/live/GndcSjLFLuM?si=GEWlKDFNCM5U6Gj3&origin=https://racecams.pages.dev"  , "desc": "015" },
    { "key": "5",  "url": "https://www.youtube.com/live/1gYh_Fft1Mo?si=5t22byNOOcyMpiJ9&origin=https://racecams.pages.dev" , "desc": "016" },
    { "key": "6",  "url": "https://www.youtube.com/live/6p-yZf_kuHI?si=wJ0WXeBegwxI2ZSK&origin=https://racecams.pages.dev"  , "desc": "033" },
    { "key": "7",  "url": "https://www.youtube.com/live/vjDFvNFhjm8?si=BgVfWAUOg8OPgNgh&origin=https://racecams.pages.dev" , "desc": "044" },
    { "key": "8",  "url": "https://www.youtube.com/live/hWc4-zg7kDQ?si=S_jvLaBivXBY8jN3&origin=https://racecams.pages.dev"  , "desc": "050" },
    { "key": "9",  "url": "https://www.youtube.com/live/eTDMNG7qP5E?si=ImYOs6WDOoPYkQIm&origin=https://racecams.pages.dev"  , "desc": "072" },
    { "key": "10", "url": "https://www.youtube.com/live/YtShNztM1IM?si=fNIXCLaSSRyTBLE9B&origin=https://racecams.pages.dev"  , "desc": "088" },
    { "key": "11", "url": "https://www.youtube.com/live/fgU5p9tl1y0?si=LKCH7vkB0tPErjlH&origin=https://racecams.pages.dev"  , "desc": "130" },
    { "key": "12", "url": "https://www.youtube.com/live/S-HwyYiyq9A?si=UnBu7ToJT5IPGBNk&origin=https://racecams.pages.dev"  , "desc": "227" },
    { "key": "13", "url": "https://www.youtube.com/live/LKVeGBDCwd8?si=NId0jQAwCR39nPRP&origin=https://racecams.pages.dev"  , "desc": "830" },
    { "key": "14", "url": "https://www.youtube.com/live/fapTclFkixI?si=Otcfxj1SvEQ0Vgt7&pp=iAQB&origin=https://racecams.pages.dev" , "desc": "911" },
    { "key": "15", "url": "https://youtu.be/knV_q1-d00I&pp=iAQB&origin=https://racecams.pages.dev"                                                                 , "desc": "Pitlane" },
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
