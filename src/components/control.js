import React, { useState, useEffect, useCallback } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

function Control({ urls,setUrls,playState, setPlayState, setGridMode,refs}) {
  const onboardsButtonClassDefault = "shrink-0 inline-block px-4 py-2 mx-4 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
  const [isPlayAll, setIsPlayAll] = useState(playState.every((it) => it === true));
  const [isPlayOnboards, setIsPlayOnboards] = useState((it, index) => index === 0 || it === true);
  const [onboardsButtonClass, setOnboardsButtonClass] = useState(onboardsButtonClassDefault);


  const checkPlayOnboards = useCallback(() => {
    let value = playState.every((it, index) => index === 0 || it === true);
    console.log("play onboards value: " + value);
    return value;
  }, [playState]);

  useEffect(() => {
    const temp = checkPlayOnboards;
    setIsPlayAll(temp && playState[0] === true);
    setIsPlayOnboards(temp);
  }, [playState, checkPlayOnboards]);

  const changePlayAll = () => {
    var newPlayState = [];
    for (var i = 0; i < playState.length; i++) {
      newPlayState.push(!isPlayAll);
    }
    setPlayState(newPlayState);
    //seekToEnd()
  };

  const changePlayOnboards = () => {
    var newPlayState = [];
    for (var i = 0; i < playState.length; i++) {
      newPlayState.push(!isPlayOnboards);
    }
    newPlayState[0] = playState[0];
    setPlayState(newPlayState);
    //seekToEnd()
  };

  /*
  function seekToEnd(){
    for (var i = 0; i < refs.length; i++) {
      let player = refs[i].current
      if(player != null){
        player.seekTo(1)
      }
    }
  }
  */


  const changeGridMode = (event) => {
    let temp = parseInt(event.target.value)
    setGridMode(temp)
    if(temp >= 0){
      console.log("grid mode > 0: " + temp )
      setOnboardsButtonClass("invisible " + onboardsButtonClassDefault)

      var newPlayState = [...playState]
      newPlayState[temp] = true;
      setPlayState(newPlayState);
      //seekToEnd()
    }else{
      console.log("grid mode <= 0: " + temp )
      setOnboardsButtonClass(onboardsButtonClassDefault)
      //seekToEnd()
    }
  
  }
  
  const optionItems =  playState.map((number,index) =>
    <option value={index}>{urls[index].desc}</option>
  )

  const changeGerman = () => {
    let temp = [...urls]
    temp[0].url = "https://www.youtube.com/watch?v=Rk2lJC0KcLs"
    setUrls(temp)
    //seekToEnd()
  }

  const changeEnglish = () => {
    let temp = [...urls]
    temp[0].url = "https://www.youtube.com/watch?v=FVjTSBefDjU"
    setUrls(temp)
    //seekToEnd()
  }

  return (
    <div className="flex flex-row justify-start justify-items-center py-2 h-11 justify-center bg-black">
      <button type="button" className="shrink-0 inline-block px-4 py-2 mx-4 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={changePlayAll}>
        {isPlayAll ? <FaPause className="inline-block mx-1 align-baseline" /> : <FaPlay className="inline-block mx-1 align-baseline" />} All
      </button>
      <button type="button" className={onboardsButtonClass}  onClick={changePlayOnboards}>
        {isPlayOnboards ? <FaPause className="inline-block mx-1 align-baseline" /> : <FaPlay className="inline-block mx-1 align-baseline" />} Onboard cams
      </button>


      <div className="flex justify-center">
        <div className="mb-0 xl:w-96">
          <select class="form-select form-select-sm appearance-none block w-full px-2 py-0.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example" defaultValue="-1" onChange={changeGridMode}>
            <option value="-1">All</option>
            <option value="-2">Onboards</option>
            {optionItems}
          </select>
        </div>
      </div>
      <div className="ml-auto mr-5 mt-2"> 
        <a href="https://www.youtube.com/watch?v=zj_--XTYBbM" target="_blank" rel="noreferrer" className="text-white ">GPS</a>
        <a href="https://livetiming24.azurewebsites.net/events/50/results" target="_blank" rel="noreferrer" className="text-white ml-5">Live timing</a>
        <a href="https://www.24h-rennen.de/en/participants-2022" target="_blank" rel="noreferrer" className="text-white ml-5">Entry list</a>
        <button className="text-white ml-10" onClick={changeEnglish}>en</button>
        <button className="text-white ml-1" onClick={changeGerman}>de</button>
      </div>
    </div>
  );
}

export default Control;

/*
            <option value="-1" selected>urls[0].desc</option>
            <option value="-2">Onboards urls[1].desc</option>
*/
