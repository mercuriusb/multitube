import React, { useState, useEffect,useCallback } from 'react';
import { FaPause,FaPlay } from "react-icons/fa";

function Control({playState,setPlayState}) {
    const [isPlayAll,setIsPlayAll] = useState(playState.every(it => it === true))
    const [isPlayOnboards,setIsPlayOnboards] = useState((it,index) => index === 0 || it === true)

    const checkPlayOnboards = useCallback(() => {
      let value = playState.every((it,index) => index === 0 || it === true)
      console.log("play onboards value: " + value)
      return value;
    },[playState])

    useEffect(() => {
      const temp = checkPlayOnboards
      setIsPlayAll(temp && playState[0] === true)
      setIsPlayOnboards(temp)
    },[playState,checkPlayOnboards]);

    const changePlayAll = () => {
      var newPlayState = []
      for(var i=0; i < playState.length; i++){
        newPlayState.push(!isPlayAll)
      }
      setPlayState(newPlayState);
    }
    const changePlayOnboards = () => {
      var newPlayState = []
      for(var i=0; i < playState.length; i++){
        newPlayState.push(!isPlayOnboards)
      }
      newPlayState[0] = playState[0]
      setPlayState(newPlayState);
    }



    return (
    <div className="flex flex-row justify-start justify-items-center py-2 h-[5%] bg-black">
      <button type="button" class="shrink-0 inline-block px-4 py-2 mx-4 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={changePlayAll}>
        {isPlayAll ? <FaPause class="inline-block mx-1 align-baseline"/> : <FaPlay class="inline-block mx-1 align-baseline"/>} All
      </button>
      <button type="button" class="shrink-0 inline-block px-4 py-2 mx-4 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={changePlayOnboards}>
        {isPlayOnboards ? <FaPause class="inline-block mx-1 align-baseline"/> : <FaPlay class="inline-block mx-1 align-baseline"/>} Onboards
      </button>
    </div>
    )
}



export default Control;

