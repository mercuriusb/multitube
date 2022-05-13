import React, { useState, useEffect } from 'react';
import { useCallback } from 'react'

function Control({playState,setPlayState,volumeState,setVolumeState}) {
    const [isPlayAll,setIsPlayAll] = useState(playState.every(it => it === true))
    const [isPlayOnboards,setIsPlayOnboards] = useState((it,index) => index === 0 || it === true)

    const checkAllPlaying = useCallback(() => {
      let value = playState.every(it => it === true)
      console.log("play all value: " + value + " main state: " + playState[0])
      return value;
    },[playState])

    const checkPlayOnboards = useCallback(() => {
      let value = playState.every((it,index) => index === 0 || it === true)
      console.log("play onboards value: " + value)
      return value;
    },[playState])

    useEffect(() => {
      setIsPlayAll(checkAllPlaying)
      setIsPlayOnboards(checkPlayOnboards)
    },[checkAllPlaying,checkPlayOnboards]);

    const changePlayAll = () => {
      if(isPlayAll){
        setPlayState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
      }else{
        setPlayState([true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]);
      }
    }
    const changePlayOnboards = () => {
      if(isPlayOnboards){
        setPlayState([playState[0],false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
      }else{
        setPlayState([playState[0],true,true,true,true,true,true,true,true,true,true,true,true,true,true]);
      }
    }
    const muteAll = () => {
      setVolumeState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    }
    const muteOnboards = () => {
      console.log("TADA")
      setVolumeState([volumeState[0],0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]);
    }

    return (
    <>
      <button onClick={changePlayAll}>{isPlayAll ? "Halt" : "Play all"}</button>
      <button onClick={changePlayOnboards}>{isPlayOnboards ? "Halt onboards" : "Play onboards"}</button>
    </>
    )
}

export default Control;

/*
<button onClick={muteAll}>Mute all</button>
<button onClick={muteOnboards}>Mute onboards</button>
*/