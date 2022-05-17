import React from 'react';
import ReactPlayer from "react-player";

function Grid({urls,playState,setPlayState,volumeState}) {

  const handlePlayStateChange = (index,value) => {
    let t= [...playState]; 
    t[index]=value; 
    setPlayState(t)
    console.log("Index: " + index + " Array: " + t)
  }

  const grid1 = 
  <div className="bg-black gap-1 h-[95%] grid grid-cols-1">
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[0]} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
  </div>

/*
  const obgrid1 = 
  <div className="bg-black gap-1 h-[95%] grid grid-cols-1">
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
  </div>
*/

  const grid2 = 
  <div className="bg-black gap-1 h-[95%] grid grid-cols-2">
    <div className="bg-black row-span-4 col-span-1">
      <ReactPlayer id="0" url={urls[0]} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
  </div>

/*
  const obgrid2 = 
  <div className="bg-black gap-1 h-[95%] grid grid-rows-2">
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[2]} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
  </div>
*/
  const grid3 = 
  <div className="bg-black gap-1 h-[95%] grid grid-cols-2">
    <div className="bg-black row-span-4 col-span-2">
      <ReactPlayer id="0" url={urls[0]} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[2]} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
  </div>

/*
  const obgrid3 = 
  <div className="bg-black gap-1 h-[95%] grid grid-rows-3">
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[2]} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[3]} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
  </div>
*/
  const grid4 = 
  <div className="bg-black gap-1 h-[95%] grid grid-cols-3">
    <div className="bg-black row-span-4 col-span-3">
      <ReactPlayer id="0" url={urls[0]} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[2]} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[3]} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
  </div>

  const grid5 = 
  <div className="bg-black gap-1 h-[95%] grid grid-cols-4">
    <div className="bg-black row-span-4 col-span-4">
      <ReactPlayer id="0" url={urls[0]} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[2]} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[3]} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[4]} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
  </div>

  const grid6 = 
    <div className="bg-black gap-1 h-[95%] grid grid-cols-5">
      <div className="bg-black">
        <ReactPlayer id="0" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
      </div>
      <div className="bg-black row-span-3 col-span-3">
        <ReactPlayer id="0" url={urls[0]} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
      </div>
      <div className="bg-black">
        <ReactPlayer id="0" url={urls[2]} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
      </div>

      <div className="bg-black">
        <ReactPlayer id="0" url={urls[3]} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
      </div>
      <div className="bg-black">
        <ReactPlayer id="0" url={urls[4]} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
      </div>

      <div className="bg-black">
      </div>
     <div className="bg-black">
        <ReactPlayer id="0" url={urls[5]} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
      </div>
  </div>

  const grid7 = 
  <div className="bg-black gap-1 h-[95%] grid grid-cols-5">
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black row-span-3 col-span-3">
      <ReactPlayer id="0" url={urls[0]} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[2]} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>

    <div className="bg-black">
      <ReactPlayer id="0" url={urls[3]} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[4]} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>

    <div className="bg-black">
      <ReactPlayer id="0" url={urls[5]} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[6]} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
  </div>

  const grid8 = 
  <div className="bg-black gap-1 h-[95%] grid grid-cols-5">
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black row-span-2 col-span-3">
      <ReactPlayer id="0" url={urls[0]} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[2]} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>

    <div className="bg-black">
      <ReactPlayer id="0" url={urls[3]} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[4]} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>

    <div className="bg-black">
      <ReactPlayer id="0" url={urls[5]} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black col-span-3">
      <ReactPlayer id="0" url={urls[6]} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[7]} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
  </div>

  const grid9 = 
  <div className="bg-black gap-1 h-[95%] grid grid-cols-4">
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black row-span-2 col-span-2">
      <ReactPlayer id="0" url={urls[0]} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[2]} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>

    <div className="bg-black">
      <ReactPlayer id="0" url={urls[3]} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[4]} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>

    <div className="bg-black">
      <ReactPlayer id="0" url={urls[5]} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[6]} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[7]} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[8]} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
  </div>


  const grid10 = 
  <div className="bg-black gap-1 h-[95%] grid grid-cols-5">
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black row-span-2 col-span-3">
      <ReactPlayer id="0" url={urls[0]} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[2]} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>

    <div className="bg-black">
      <ReactPlayer id="0" url={urls[3]} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[4]} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>

    <div className="bg-black">
      <ReactPlayer id="0" url={urls[5]} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[6]} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[7]} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[8]} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[9]} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
  </div>

  const grid11 = 
  <div className="bg-black gap-1 h-[95%] grid grid-cols-4">
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[2]} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[3]} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[4]} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>


    <div className="bg-black row-span-3">
      <ReactPlayer id="0" url={urls[5]} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black row-span-3 col-span-2">
      <ReactPlayer id="0" url={urls[0]} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black row-span-3">
      <ReactPlayer id="0" url={urls[6]} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>

    <div className="bg-black">
      <ReactPlayer id="0" url={urls[7]} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[8]} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[9]} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[10]} width="100%" height="100%" volume={volumeState[10]} playing={playState[10]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
  </div>

  const grid12 = 
  <div className="bg-black gap-1 h-[95%] grid grid-cols-4">
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[2]} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[3]} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[4]} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>


    <div className="bg-black row-span-2">
      <ReactPlayer id="0" url={urls[5]} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black row-span-3 col-span-2">
      <ReactPlayer id="0" url={urls[0]} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black row-span-2">
      <ReactPlayer id="0" url={urls[6]} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>

    <div className="bg-black">
      <ReactPlayer id="0" url={urls[7]} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[8]} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[9]} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[10]} width="100%" height="100%" volume={volumeState[10]} playing={playState[10]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[11]} width="100%" height="100%" volume={volumeState[11]} playing={playState[11]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
  </div>

  const grid13 = 
  <div className="bg-black gap-1 h-[95%] grid grid-cols-4">
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[2]} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[3]} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[4]} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>


    <div className="bg-black row-span-2">
      <ReactPlayer id="0" url={urls[5]} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black row-span-3 col-span-2">
      <ReactPlayer id="0" url={urls[0]} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black row-span-2">
      <ReactPlayer id="0" url={urls[6]} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>

    <div className="bg-black">
      <ReactPlayer id="0" url={urls[7]} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[8]} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>

    <div className="bg-black">
      <ReactPlayer id="0" url={urls[9]} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[10]} width="100%" height="100%" volume={volumeState[10]} playing={playState[10]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[11]} width="100%" height="100%" volume={volumeState[11]} playing={playState[11]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black">
      <ReactPlayer id="0" url={urls[12]} width="100%" height="100%" volume={volumeState[12]} playing={playState[12]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
  </div>

  const grid14 = 
  <div className="bg-black gap-1 h-[95%] grid grid-cols-5">
    <div className="bg-black col-span-1">
      <ReactPlayer id="1" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="2" url={urls[2]} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="3" url={urls[3]} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(3,true)} onPause={() => handlePlayStateChange(3,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="4" url={urls[4]} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(4,true)} onPause={() => handlePlayStateChange(4,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="5" url={urls[5]} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(5,true)} onPause={() => handlePlayStateChange(5,false)}/>
    </div>

    <div className="bg-black col-span-1">
      <ReactPlayer id="6" url={urls[6]} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(6,true)} onPause={() => handlePlayStateChange(6,false)}/>
    </div>
    <div className="bg-black row-span-2 col-span-3">
      <ReactPlayer id="0" url={urls[0]} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="7" url={urls[7]} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(7,true)} onPause={() => handlePlayStateChange(7,false)}/>
    </div>

    <div className="bg-black col-span-1">
      <ReactPlayer id="8" url={urls[8]} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(8,true)} onPause={() => handlePlayStateChange(8,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="9" url={urls[9]} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(9,true)} onPause={() => handlePlayStateChange(9,false)}/>
    </div>

    <div className="bg-black col-span-1">
      <ReactPlayer id="10" url={urls[10]} width="100%" height="100%" volume={volumeState[10]} playing={playState[10]} controls={true} onPlay={() => handlePlayStateChange(10,true)} onPause={() => handlePlayStateChange(10,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="11" url={urls[11]} width="100%" height="100%" volume={volumeState[11]} playing={playState[11]} controls={true} onPlay={() => handlePlayStateChange(11,true)} onPause={() => handlePlayStateChange(11,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="12" url={urls[12]} width="100%" height="100%" volume={volumeState[12]} playing={playState[12]} controls={true} onPlay={() => handlePlayStateChange(12,true)} onPause={() => handlePlayStateChange(12,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="13" url={urls[13]} width="100%" height="100%" volume={volumeState[13]} playing={playState[13]} controls={true} onPlay={() => handlePlayStateChange(13,true)} onPause={() => handlePlayStateChange(13,false)}/>
    </div>
    <div className="bg-black col-span-1">
    </div>
  </div>


  const grid15 = 
  <div className="bg-black gap-1 h-[95%] grid grid-cols-5">
    <div className="bg-black col-span-1">
      <ReactPlayer id="1" url={urls[1]} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="2" url={urls[2]} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="3" url={urls[3]} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(3,true)} onPause={() => handlePlayStateChange(3,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="4" url={urls[4]} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(4,true)} onPause={() => handlePlayStateChange(4,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="5" url={urls[5]} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(5,true)} onPause={() => handlePlayStateChange(5,false)}/>
    </div>

    <div className="bg-black col-span-1">
      <ReactPlayer id="6" url={urls[6]} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(6,true)} onPause={() => handlePlayStateChange(6,false)}/>
    </div>
    <div className="bg-black row-span-2 col-span-3">
      <ReactPlayer id="0" url={urls[0]} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="7" url={urls[7]} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(7,true)} onPause={() => handlePlayStateChange(7,false)}/>
    </div>

    <div className="bg-black col-span-1">
      <ReactPlayer id="8" url={urls[8]} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(8,true)} onPause={() => handlePlayStateChange(8,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="9" url={urls[9]} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(9,true)} onPause={() => handlePlayStateChange(9,false)}/>
    </div>

    <div className="bg-black col-span-1">
      <ReactPlayer id="10" url={urls[10]} width="100%" height="100%" volume={volumeState[10]} playing={playState[10]} controls={true} onPlay={() => handlePlayStateChange(10,true)} onPause={() => handlePlayStateChange(10,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="11" url={urls[11]} width="100%" height="100%" volume={volumeState[11]} playing={playState[11]} controls={true} onPlay={() => handlePlayStateChange(11,true)} onPause={() => handlePlayStateChange(11,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="12" url={urls[12]} width="100%" height="100%" volume={volumeState[12]} playing={playState[12]} controls={true} onPlay={() => handlePlayStateChange(12,true)} onPause={() => handlePlayStateChange(12,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="13" url={urls[13]} width="100%" height="100%" volume={volumeState[13]} playing={playState[13]} controls={true} onPlay={() => handlePlayStateChange(13,true)} onPause={() => handlePlayStateChange(13,false)}/>
    </div>
    <div className="bg-black col-span-1">
      <ReactPlayer id="14" url={urls[14]} width="100%" height="100%" volume={volumeState[14]} playing={playState[14]} controls={true} onPlay={() => handlePlayStateChange(14,true)} onPause={() => handlePlayStateChange(14,false)}/>
    </div>
  </div>

  if(playState.length === 2){
    return grid2
  }else if(playState.length === 3){
    return grid3
  }else if(playState.length === 4){
    return grid4
  }else if(playState.length === 5){
    return grid5
  }else if(playState.length === 6){
    return grid6
  }else if(playState.length === 7){
    return grid7
  }else if(playState.length === 8){
    return grid8
  }else if(playState.length === 9){
    return grid9
  }else if(playState.length === 10){
    return grid10
  }else if(playState.length === 11){
    return grid11
  }else if(playState.length === 12){
    return grid12
  }else if(playState.length === 13){
    return grid13
  }else if(playState.length === 14){
    return grid14
  }else if(playState.length === 15){
    return grid15
  }else{
    return grid1
  }
}

export default Grid

