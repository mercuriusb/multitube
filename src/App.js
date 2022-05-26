import React, { useState } from "react";
import "./App.css";
import Grid from "./components/grid";
import Control from "./components/control";

function App() {
  const [urls,setUrls] = useState([
    {"url":"https://www.youtube.com/watch?v=IQ3ZQ-yrSwk","desc":"Main"}, 
    {"url":"https://www.youtube.com/watch?v=hiFPS4eq21I","desc":"Cam 1"}, 
    {"url":"https://www.youtube.com/watch?v=mOd9btU7cl8","desc":"Cam 2"}, 
    {"url":"https://www.youtube.com/watch?v=0pmsIOzOoqA","desc":"Cam 3"}, 
    {"url":"https://www.youtube.com/watch?v=9krEtFyv3K4","desc":"Cam 4"}, 
    {"url":"https://www.youtube.com/watch?v=IQySD-nFirQ","desc":"Cam 5"}, 
    {"url":"https://www.youtube.com/watch?v=rUd2l2mvCWY&","desc":"Cam 6"}, 
    {"url":"https://www.youtube.com/watch?v=OLkHtyQU9KM","desc":"Cam 7"}, 
    {"url":"https://www.youtube.com/watch?v=znZWz7Evjls","desc":"Cam 8"}, 
    {"url":"https://www.youtube.com/watch?v=lRHSlNUYo_M","desc":"Cam 9"}, 
    {"url":"https://www.youtube.com/watch?v=fbfjtcG9_wk","desc":"Cam 10"}, 
    {"url":"https://www.youtube.com/watch?v=I2zzQhUkA5U","desc":"Cam 11"}, 
    {"url":"https://www.youtube.com/watch?v=W_yTiO_hrDg","desc":"Cam 12"}, 
    {"url":"https://www.youtube.com/watch?v=IQ3ZQ-yrSwk","desc":"Cam 13"}, 
    {"url":"https://www.youtube.com/watch?v=znZWz7Evjls","desc":"Cam 14"}]);

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
  const [onboardsOnly, setOnboardsOnly] = useState(false);
  const [gridMode,setGridMode]= useState(-1)


  return (
    <div className="App h-full min-h-full">
      <Control urls={urls} setUrls={setUrls} playState={playState} setPlayState={setPlayState} setGridMode={setGridMode} refs={refs}/>
      <Grid urls={urls} playState={playState} setPlayState={setPlayState} volumeState={volumeState} gridMode={gridMode} refs={refs}/>
    </div>
  );
}

export default App;
