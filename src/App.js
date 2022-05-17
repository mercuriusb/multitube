import React, { useState } from "react";
import "./App.css";
import Grid from "./components/grid";
import Control from "./components/control";

function App() {
  const urls = [
    "https://www.youtube.com/watch?v=IQ3ZQ-yrSwk", 
    "https://www.youtube.com/watch?v=hiFPS4eq21I", 
    "https://www.youtube.com/watch?v=mOd9btU7cl8", 
    "https://www.youtube.com/watch?v=0pmsIOzOoqA", 
    "https://www.youtube.com/watch?v=9krEtFyv3K4", 
    "https://www.youtube.com/watch?v=IQySD-nFirQ", 
    "https://www.youtube.com/watch?v=rUd2l2mvCWY&t=27149s", 
    "https://www.youtube.com/watch?v=OLkHtyQU9KM", 
    "https://www.youtube.com/watch?v=znZWz7Evjls", 
    "https://www.youtube.com/watch?v=lRHSlNUYo_M", 
    "https://www.youtube.com/watch?v=fbfjtcG9_wk", 
    "https://www.youtube.com/watch?v=I2zzQhUkA5U", 
    "https://www.youtube.com/watch?v=W_yTiO_hrDg", 
    "https://www.youtube.com/watch?v=IQ3ZQ-yrSwk", 
  "https://www.youtube.com/watch?v=znZWz7Evjls"];

  var initPlayState = []
  var initVolumeState = []  
  for(var i=0; i < urls.length; i++){
    initPlayState.push(false)
    initVolumeState.push(0.0)
  }
  initVolumeState[0] = 1.0

  const [playState, setPlayState] = useState(initPlayState);
  const [volumeState] = useState(initVolumeState);
  const [onboardsOnly, setOnboardsOnly] = useState(false);

  return (
    <div className="App h-full min-h-full">
      <Control playState={playState} setPlayState={setPlayState}  onboardsOnly={onboardsOnly} setOnboardsOnly={setOnboardsOnly}/>
      <Grid urls={urls} playState={playState} setPlayState={setPlayState} volumeState={volumeState} onboardsOnly={onboardsOnly} />
    </div>
  );
}

export default App;
