import React, { useState } from 'react';
import './App.css';
import Grid15 from './components/grid15'
import Control from './components/control'

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
    "https://www.youtube.com/watch?v=znZWz7Evjls"
  ]
  const [playState, setPlayState] = useState([true,false,false,false,false,false,false,false,false,false,false,false,false,false,false])
  const [volumeState, setVolumeState] = useState([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0])

  return (
    <div className="App h-full min-h-full">
      <div className="grid grid-cols-5 gap-4 h-[5%]">
        <Control playState={playState} setPlayState={setPlayState} volumeState={volumeState} setVolumeState={setVolumeState}/>
      </div>
      <div className="grid grid-cols-5 gap-1 h-[95%]">
        <Grid15 urls={urls} playState={playState} setPlayState={setPlayState} volumeState={volumeState} setVolumeState={setVolumeState}/>
      </div>
    </div>
  )
}

export default App;
