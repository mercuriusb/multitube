import React, { useState, useEffect, useCallback } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

function Control({ urls,playState, setPlayState, onboardsOnly, setOnboardsOnly,gridMode,setGridMode}) {
  const [isPlayAll, setIsPlayAll] = useState(playState.every((it) => it === true));
  const [isPlayOnboards, setIsPlayOnboards] = useState((it, index) => index === 0 || it === true);

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
    setGridMode(event.target.value)
  }
  
  const optionItems =  playState.map((number,index) =>
    <option value={index}>{urls[index].desc}</option>
  )


  return (
    <div className="flex flex-row justify-start justify-items-center py-2 h-[5%] bg-black">
      <button type="button" className="shrink-0 inline-block px-4 py-2 mx-4 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={changePlayAll}>
        {isPlayAll ? <FaPause className="inline-block mx-1 align-baseline" /> : <FaPlay className="inline-block mx-1 align-baseline" />} All
      </button>
      <button type="button" className="shrink-0 inline-block px-4 py-2 mx-4 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={changePlayOnboards}>
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

      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={changeGridMode}>
            <option value="-1" selected>All</option>
            <option value="-2">Onboards</option>
            {optionItems}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Control;

/*
            <option value="-1" selected>urls[0].desc</option>
            <option value="-2">Onboards urls[1].desc</option>
*/