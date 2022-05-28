import React, { useState } from "react";
import "./App.css";
import Grid from "./components/grid";
import Control from "./components/control";

function App() {
  const [urls,setUrls] = useState([
    {"url":"https://www.youtube.com/watch?v=FVjTSBefDjU","desc":"Main"}, 
    {"url":"https://www.youtube.com/watch?v=xsF3QBpvIvE","desc":"Onboard #1 | Porsche 911 GT3 R | Manthey-Racing"}, 
    {"url":"https://www.youtube.com/watch?v=ZWvFkdjh_ko","desc":"Onboard #3 | Mercedes-AMG GT3 | Mercedes-AMG Team Getspeed"}, 
    {"url":"https://www.youtube.com/watch?v=cemGzGeo4Hs","desc":"Onboard #5 | Audi R8 LMS GT3 | Scherer Sport Team Phoenix"}, 
    {"url":"https://www.youtube.com/watch?v=eC2xP2B8Bn8","desc":"Onboard #12 | Mercedes-AMG GT3 | MercedesAMG Team Bilstein"}, 
    {"url":"https://www.youtube.com/watch?v=Sn00OFqkX8k","desc":"Onboard #15 | Audi R8 LMS GT3 | Audi Sport Team Phoenix"}, 
    {"url":"https://www.youtube.com/watch?v=ESvxRkJ9TqQ","desc":"Onboard #22 | Audi R8 GT3 | Audi Sport Team Car Collection"}, 
    {"url":"https://www.youtube.com/watch?v=JaZBWqAmgfQ","desc":"Pitlane"}, 
    //{"url":"https://www.youtube.com/watch?v=pPb7QaVWTrM","desc":"Onboard #27 | Porsche 911 GT3 R | Toksport WRT"},
    {"url":"https://www.youtube.com/watch?v=sydhn5DZh4c","desc":"Onboard #33 | Porsche 911 GT3 R | Falken Motorsports"}, 
    {"url":"https://www.youtube.com/watch?v=Leq41aBGhAE","desc":"Onboard #44 | Porsche 911 GT3 R | Falken Motorsports"}, 
    {"url":"https://www.youtube.com/watch?v=cgs3tF-dN78","desc":"Onboard #72 | BMW M4 GT3 | BMW Junior Team"},
    {"url":"https://www.youtube.com/watch?v=FoYaUBPYZow","desc":"Onboard #98 | BMW M4 GT3 | ROWE Racing"}, 
    {"url":"https://www.youtube.com/watch?v=IqruW4FW0rM","desc":"Onboard #160 | KTM X-BOW GTX | Teichmann Racing"}, 
    {"url":"https://www.youtube.com/watch?v=EmCbafg0tZE","desc":"Onboard #162 | KTM X-BOW GTX | Teichmann Racing"}, 
    {"url":"https://www.youtube.com/watch?v=nUWd6IIJ0F8","desc":"Onboard #831 | Hyundai i30 N TCR | Hyundai Motorsport N "}
  ]);

  var initPlayState = []
  var initVolumeState = []  
  var refs = []
  for(var i=0; i < urls.length; i++){
    initPlayState.push(false)
    initVolumeState.push(0.0)
    refs.push(React.createRef())
  }
  initVolumeState[0] = 1.0

  const [playState, setPlayState] = useState(initPlayState);
  const [volumeState] = useState(initVolumeState);
  const [gridMode,setGridMode]= useState(-1)


  return (
    <div className="App h-full min-h-full flex flex-col bg-black">
      <Control urls={urls} setUrls={setUrls} playState={playState} setPlayState={setPlayState} setGridMode={setGridMode} refs={refs}/>
      <Grid urls={urls} playState={playState} setPlayState={setPlayState} volumeState={volumeState} gridMode={gridMode} refs={refs}/>
    </div>
  );
}

export default App;
