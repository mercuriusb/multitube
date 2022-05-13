import React from 'react';
import ReactPlayer from "react-player";

function Grid15({urls,playState,setPlayState,volumeState,setVolumeState}) {

  const handlePlayStateChange = (index,value) => {
    let t= [...playState]; 
    t[index]=value; 
    setPlayState(t)
    console.log("Index: " + index + " Array: " + t)
  }

  return (
    <>
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
    </>
  )
}

export default Grid15

/*
1
x

2
x x

3
x x x

4

x x x x

5

x x
     
     
x x

6

x x x
     
     
x x


7
x x x
     
     
x x x


8
x x x x
     
     
x x x


9
x x x x
     
     
x x x x


10
x x x x x
     
     
x x x x


11
x x x x x
     
     
x x x x x


13
x x x x
x     x
x     x
x x x x

14
x x x x x
x       x
x       x
x x  x  x


15
x x x x x
x       x
x       x
x x x x x
*/
