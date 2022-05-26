import React, { useState, useEffect, useCallback } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

function Control({ urls,setUrls,playState, setPlayState, onboardsOnly, setOnboardsOnly,gridMode,setGridMode}) {
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
  };
  const changePlayOnboards = () => {
    var newPlayState = [];
    for (var i = 0; i < playState.length; i++) {
      newPlayState.push(!isPlayOnboards);
    }
    newPlayState[0] = playState[0];
    setPlayState(newPlayState);
  };

  const changeOnboardsOnly = () => {
    setOnboardsOnly(!onboardsOnly);
  };

  const changeGridMode = (event) => {
    let temp = parseInt(event.target.value)
    setGridMode(temp)
    if(temp >= 0){
      console.log("grid mode > 0: " + temp )
      setOnboardsButtonClass("invisible " + onboardsButtonClassDefault)

      var newPlayState = [...playState]
      newPlayState[temp] = true;
      setPlayState(newPlayState);

    }else{
      console.log("grid mode <= 0: " + temp )
      setOnboardsButtonClass(onboardsButtonClassDefault)
    }
  
  }
  
  const optionItems =  playState.map((number,index) =>
    <option value={index}>{urls[index].desc}</option>
  )

  const changeGerman = () => {
    let temp = [...urls]
    temp[0].url = "https://www.youtube.com/watch?v=IQ3ZQ-yrSwk"
    setUrls(temp)
  }

  const changeEnglish = () => {
    let temp = [...urls]
    temp[0].url = "https://www.youtube.com/watch?v=KQK6KO-MhFE"
    setUrls(temp)
  }

  return (
    <div className="flex flex-row justify-start justify-items-center py-2 h-[5%] bg-black">
      <button type="button" className="shrink-0 inline-block px-4 py-2 mx-4 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={changePlayAll}>
        {isPlayAll ? <FaPause className="inline-block mx-1 align-baseline" /> : <FaPlay className="inline-block mx-1 align-baseline" />} All
      </button>
      <button type="button" className={onboardsButtonClass}  onClick={changePlayOnboards}>
        {isPlayOnboards ? <FaPause className="inline-block mx-1 align-baseline" /> : <FaPlay className="inline-block mx-1 align-baseline" />} Onboard cams
      </button>

      {false && playState.length > 1 && (
        <div className="form-group form-check text-center px-4 py-2">
          <input className="form-check-input accent-white h-4 w-4 border border-gray-500 rounded-sm bg-black checked:bg-white checked:border-b-gray-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" onChange={changeOnboardsOnly} />
          <label className="form-check-label inline-block text-white" htmlFor="flexCheckChecked">
            Onboard cams only
          </label>
        </div>
      )}

      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <select className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" defaultValue="-1" onChange={changeGridMode}>
            <option value="-1">All</option>
            <option value="-2">Onboards</option>
            {optionItems}
          </select>
        </div>
      </div>
      <div className="ml-auto mr-5 mt-2"> 
        <a href="https://livetiming24.azurewebsites.net/events/50/results" target="_blank" className="text-white ">Live timing</a>
        <a href="https://www.24h-rennen.de/en/participants-2022" target="_blank" className="text-white ml-10">Entry list</a>
        <a className="text-white ml-10" onClick={changeEnglish}>en</a>
        <a className="text-white ml-1" onClick={changeGerman}>de</a>
      </div>
    </div>
  );
}

export default Control;

/*
            <option value="-1" selected>urls[0].desc</option>
            <option value="-2">Onboards urls[1].desc</option>
*/