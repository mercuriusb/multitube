import React, { useState } from "react";
import "./App.css";
import Grid from "./components/grid";
import Control from "./components/control";

function App() {
  const [urls,setUrls] = useState([
    {"url":"https://www.youtube.com/watch?v=GHXtvbcYaIs","desc":"Main"}, //https://www.youtube.com/watch?v=uAxiFGrfbIY top quali link
    {"url":"https://www.youtube.com/watch?v=JaZBWqAmgfQ","desc":"Pitlane"}, 
    {"url":"https://www.youtube.com/watch?v=IqruW4FW0rM","desc":"Onboard #160 | KTM X-BOW GTX | Teichmann Racing"}, 
    {"url":"https://www.youtube.com/watch?v=sydhn5DZh4c","desc":"Onboard #33 | Porsche 911 GT3 R | Falken Motorsports"}, 
    {"url":"https://www.youtube.com/watch?v=cemGzGeo4Hs","desc":"Onboard #5 | Audi R8 LMS GT3 | Scherer Sport Team Phoenix"}, 
    {"url":"https://www.youtube.com/watch?v=nUWd6IIJ0F8","desc":"Onboard #831 | Hyundai i30 N TCR | Hyundai Motorsport N "}, 
    {"url":"https://www.youtube.com/watch?v=ZWvFkdjh_ko","desc":"Onboard #3 | Mercedes-AMG GT3 | Mercedes-AMG Team Getspeed"}, 
    {"url":"https://www.youtube.com/watch?v=Sn00OFqkX8k","desc":"Onboard #15 | Audi R8 LMS GT3 | Audi Sport Team Phoenix"}, 
    {"url":"https://www.youtube.com/watch?v=xsF3QBpvIvE","desc":"Onboard #1 | Porsche 911 GT3 R | Manthey-Racing"}, 
    {"url":"https://www.youtube.com/watch?v=pPb7QaVWTrM","desc":"Onboard #27 | Porsche 911 GT3 R | Toksport WRT"}/*, 
    {"url":"","desc":"Cam 10"}, 
    {"url":"","desc":"Cam 11"}, 
    {"url":"","desc":"Cam 12"}, 
    {"url":"","desc":"Cam 13"}, 
  {"url":"","desc":"Cam 14"}*/]);

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
  //const [onboardsOnly, setOnboardsOnly] = useState(false);
  const [gridMode,setGridMode]= useState(-1)


  return (
    <div className="App h-full min-h-full">
      <Control urls={urls} setUrls={setUrls} playState={playState} setPlayState={setPlayState} setGridMode={setGridMode} refs={refs}/>
      <Grid urls={urls} playState={playState} setPlayState={setPlayState} volumeState={volumeState} gridMode={gridMode} refs={refs}/>
    </div>
  );
}

export default App;
