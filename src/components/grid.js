import React from 'react';
import ReactPlayer from "react-player";

function Grid({urls,playState,setPlayState,volumeState,gridMode,refs}) {

  const handlePlayStateChange = (index,value) => {
    let t= [...playState]; 
    t[index]=value; 
    setPlayState(t)
    console.log("Index: " + index + " Array: " + t)
  }
  const grids = []

  for (let i = 0; i < urls.length; i++) {
      console.log("url " + i + ": " + urls[i].url);
  }

  if(urls.length > 0){
    grids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-1">
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[0]} url={urls[[0]].url} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
      </div>
    )
  }

  if(urls.length > 1){
      grids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-2">
        <div className="bg-black row-span-4 col-span-1">
          <ReactPlayer id="0" ref={refs[0]} url={urls[[0]].url} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black row-span-4 col-span-1">
          <ReactPlayer id="0" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
      </div>
    )
  }

  if(urls.length > 2){
    grids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-2">
        <div className="bg-black row-span-4 col-span-2">
          <ReactPlayer id="0" ref={refs[0]} url={urls[[0]].url} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
      </div>
    )
  }


  if(urls.length > 3){
    grids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-3">
        <div className="bg-black row-span-4 col-span-3">
          <ReactPlayer id="0" ref={refs[0]} url={urls[[0]].url} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
      </div>
    )
  }
  
  if(urls.length > 4){
    grids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-4">
        <div className="bg-black row-span-4 col-span-4">
          <ReactPlayer id="0" ref={refs[0]} url={urls[[0]].url} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
      </div>
    )
  }

  if(urls.length > 5){
    grids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-5">
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black row-span-3 col-span-3">
          <ReactPlayer id="0" ref={refs[0]} url={urls[[0]].url} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>

        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>

        <div className="bg-black">
        </div>
      <div className="bg-black">
          <ReactPlayer id="0" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
      </div>
    )
  }
  
  if(urls.length > 6){
    grids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-5">
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black row-span-3 col-span-3">
          <ReactPlayer id="0" ref={refs[0]} url={urls[[0]].url} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>

        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>

        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
      </div>
    )
  }

  if(urls.length > 7){
    grids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-5">
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black row-span-2 col-span-3">
          <ReactPlayer id="0" ref={refs[0]} url={urls[[0]].url} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>

        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>

        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="0" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[7]} url={urls[[7]].url} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
      </div>
    )
  }
  
  if(urls.length > 8){
    grids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-4">
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black row-span-2 col-span-2">
          <ReactPlayer id="0" ref={refs[0]} url={urls[[0]].url} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>

        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>

        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[7]} url={urls[[7]].url} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[8]} url={urls[[8]].url} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
      </div>
      )
    }

  if(urls.length > 9){
    grids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-5">
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black row-span-2 col-span-3">
          <ReactPlayer id="0" ref={refs[0]} url={urls[[0]].url} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>

        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>

        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[7]} url={urls[[7]].url} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[8]} url={urls[[8]].url} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[9]} url={urls[[9]].url} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
      </div>
    )
  }  

  if(urls.length > 10){
    grids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-4">
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>


        <div className="bg-black row-span-3">
          <ReactPlayer id="0" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black row-span-3 col-span-2">
          <ReactPlayer id="0" ref={refs[0]} url={urls[[0]].url} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black row-span-3">
          <ReactPlayer id="0" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>

        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[7]} url={urls[[7]].url} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[8]} url={urls[[8]].url} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[9]} url={urls[[9]].url} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" url={urls[10].url} width="100%" height="100%" volume={volumeState[10]} playing={playState[10]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
      </div>
    )
  }
  
  if(urls.length > 11){
    grids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-4">
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>


        <div className="bg-black row-span-2">
          <ReactPlayer id="0" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black row-span-3 col-span-2">
          <ReactPlayer id="0" ref={refs[0]} url={urls[[0]].url} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black row-span-2">
          <ReactPlayer id="0" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>

        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[7]} url={urls[[7]].url} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[8]} url={urls[[8]].url} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[9]} url={urls[[9]].url} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" url={urls[10].url} width="100%" height="100%" volume={volumeState[10]} playing={playState[10]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" url={urls[11].url} width="100%" height="100%" volume={volumeState[11]} playing={playState[11]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
      </div>
    )
  }

  if(urls.length > 12){
    grids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-4">
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>


        <div className="bg-black row-span-2">
          <ReactPlayer id="0" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black row-span-3 col-span-2">
          <ReactPlayer id="0" ref={refs[0]} url={urls[[0]].url} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black row-span-2">
          <ReactPlayer id="0" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>

        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[7]} url={urls[[7]].url} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[8]} url={urls[[8]].url} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>

        <div className="bg-black">
          <ReactPlayer id="0" ref={refs[9]} url={urls[[9]].url} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" url={urls[10].url} width="100%" height="100%" volume={volumeState[10]} playing={playState[10]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" url={urls[11].url} width="100%" height="100%" volume={volumeState[11]} playing={playState[11]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black">
          <ReactPlayer id="0" url={urls[12].url} width="100%" height="100%" volume={volumeState[12]} playing={playState[12]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
      </div>
    )
  }

  if(urls.length > 13){
    grids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-5">
        <div className="bg-black col-span-1">
          <ReactPlayer id="1" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="2" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="3" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(3,true)} onPause={() => handlePlayStateChange(3,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="4" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(4,true)} onPause={() => handlePlayStateChange(4,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="5" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(5,true)} onPause={() => handlePlayStateChange(5,false)}/>
        </div>

        <div className="bg-black col-span-1">
          <ReactPlayer id="6" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(6,true)} onPause={() => handlePlayStateChange(6,false)}/>
        </div>
        <div className="bg-black row-span-2 col-span-3">
          <ReactPlayer id="0" ref={refs[0]} url={urls[[0]].url} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="7" ref={refs[7]} url={urls[[7]].url} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(7,true)} onPause={() => handlePlayStateChange(7,false)}/>
        </div>

        <div className="bg-black col-span-1">
          <ReactPlayer id="8" ref={refs[8]} url={urls[[8]].url} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(8,true)} onPause={() => handlePlayStateChange(8,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="9" ref={refs[9]} url={urls[[9]].url} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(9,true)} onPause={() => handlePlayStateChange(9,false)}/>
        </div>

        <div className="bg-black col-span-1">
          <ReactPlayer id="10" url={urls[10].url} width="100%" height="100%" volume={volumeState[10]} playing={playState[10]} controls={true} onPlay={() => handlePlayStateChange(10,true)} onPause={() => handlePlayStateChange(10,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="11" url={urls[11].url} width="100%" height="100%" volume={volumeState[11]} playing={playState[11]} controls={true} onPlay={() => handlePlayStateChange(11,true)} onPause={() => handlePlayStateChange(11,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="12" url={urls[12].url} width="100%" height="100%" volume={volumeState[12]} playing={playState[12]} controls={true} onPlay={() => handlePlayStateChange(12,true)} onPause={() => handlePlayStateChange(12,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="13" url={urls[13].url} width="100%" height="100%" volume={volumeState[13]} playing={playState[13]} controls={true} onPlay={() => handlePlayStateChange(13,true)} onPause={() => handlePlayStateChange(13,false)}/>
        </div>
        <div className="bg-black col-span-1">
        </div>
      </div>
    )
  }

  if(urls.length > 14){
    grids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-5">
        <div className="bg-black col-span-1">
          <ReactPlayer id="1" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="2" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="3" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(3,true)} onPause={() => handlePlayStateChange(3,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="4" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(4,true)} onPause={() => handlePlayStateChange(4,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="5" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(5,true)} onPause={() => handlePlayStateChange(5,false)}/>
        </div>

        <div className="bg-black col-span-1">
          <ReactPlayer id="6" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(6,true)} onPause={() => handlePlayStateChange(6,false)}/>
        </div>
        <div className="bg-black row-span-2 col-span-3">
          <ReactPlayer id="0" ref={refs[0]} url={urls[[0]].url} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="7" ref={refs[7]} url={urls[[7]].url} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(7,true)} onPause={() => handlePlayStateChange(7,false)}/>
        </div>

        <div className="bg-black col-span-1">
          <ReactPlayer id="8" ref={refs[8]} url={urls[[8]].url} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(8,true)} onPause={() => handlePlayStateChange(8,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="9" ref={refs[9]} url={urls[[9]].url} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(9,true)} onPause={() => handlePlayStateChange(9,false)}/>
        </div>

        <div className="bg-black col-span-1">
          <ReactPlayer id="10" url={urls[10].url} width="100%" height="100%" volume={volumeState[10]} playing={playState[10]} controls={true} onPlay={() => handlePlayStateChange(10,true)} onPause={() => handlePlayStateChange(10,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="11" url={urls[11].url} width="100%" height="100%" volume={volumeState[11]} playing={playState[11]} controls={true} onPlay={() => handlePlayStateChange(11,true)} onPause={() => handlePlayStateChange(11,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="12" url={urls[12].url} width="100%" height="100%" volume={volumeState[12]} playing={playState[12]} controls={true} onPlay={() => handlePlayStateChange(12,true)} onPause={() => handlePlayStateChange(12,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="13" url={urls[13].url} width="100%" height="100%" volume={volumeState[13]} playing={playState[13]} controls={true} onPlay={() => handlePlayStateChange(13,true)} onPause={() => handlePlayStateChange(13,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="14" url={urls[14].url} width="100%" height="100%" volume={volumeState[14]} playing={playState[14]} controls={true} onPlay={() => handlePlayStateChange(14,true)} onPause={() => handlePlayStateChange(14,false)}/>
        </div>
      </div>
    )
  }
  
  const obgrids = []
  //1
  if(urls.length > 0){
      obgrids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-1">
        <div className="bg-black col-span-1">
          <ReactPlayer id="0" ref={refs[0]} url={urls[[0]].url} width="100%" height="100%" volume={volumeState[0]} playing={playState[0]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
      </div>
    )
  }
  //2
  if(urls.length > 1){
    obgrids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-1">
        <div className="bg-black col-span-1">
          <ReactPlayer id="1" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
      </div>
    )
  }
  //3
  if(urls.length > 2){
    obgrids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-2">
        <div className="bg-black col-span-1">
          <ReactPlayer id="1" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="2" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
        </div>
      </div>
    )
  }
  //4
  if(urls.length > 3){
    obgrids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-3">
        <div className="bg-black col-span-1">
          <ReactPlayer id="1" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="2" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="3" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(3,true)} onPause={() => handlePlayStateChange(3,false)}/>
        </div>
      </div>
    )
  }
  //5
  if(urls.length > 4){
    obgrids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-2">
        <div className="bg-black col-span-1">
          <ReactPlayer id="1" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="2" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
        </div>

        <div className="bg-black col-span-1">
          <ReactPlayer id="3" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(3,true)} onPause={() => handlePlayStateChange(3,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="4" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(4,true)} onPause={() => handlePlayStateChange(4,false)}/>
        </div>
      </div>
    )
  }
  //6
  if(urls.length > 5){
    obgrids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-6">
        <div className="bg-black col-span-2">
          <ReactPlayer id="1" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
        <div className="bg-black col-span-2">
          <ReactPlayer id="2" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
        </div>
        <div className="bg-black col-span-2">
          <ReactPlayer id="3" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(3,true)} onPause={() => handlePlayStateChange(3,false)}/>
        </div>

        <div className="bg-black col-span-3">
          <ReactPlayer id="4" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(4,true)} onPause={() => handlePlayStateChange(4,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="5" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(5,true)} onPause={() => handlePlayStateChange(5,false)}/>
        </div>
      </div>
    )
  }
  //7
  if(urls.length > 6){
    obgrids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-2">
        <div className="bg-black col-span-1">
          <ReactPlayer id="1" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="2" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
        </div>

        <div className="bg-black col-span-1">
          <ReactPlayer id="3" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(3,true)} onPause={() => handlePlayStateChange(3,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="4" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(4,true)} onPause={() => handlePlayStateChange(4,false)}/>
        </div>

        <div className="bg-black col-span-1">
          <ReactPlayer id="5" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(5,true)} onPause={() => handlePlayStateChange(5,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="6" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(6,true)} onPause={() => handlePlayStateChange(6,false)}/>
        </div>
      </div>
    )
  }
  //8
  if(urls.length > 7){
    obgrids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-6">
        <div className="bg-black col-span-2">
          <ReactPlayer id="1" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
        <div className="bg-black col-span-2">
          <ReactPlayer id="2" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
        </div>
        <div className="bg-black col-span-2">
          <ReactPlayer id="3" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(3,true)} onPause={() => handlePlayStateChange(3,false)}/>
        </div>

        <div className="bg-black col-span-3">
          <ReactPlayer id="4" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(4,true)} onPause={() => handlePlayStateChange(4,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="5" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(5,true)} onPause={() => handlePlayStateChange(5,false)}/>
        </div>

        <div className="bg-black col-span-3">
          <ReactPlayer id="6" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(6,true)} onPause={() => handlePlayStateChange(6,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="7" ref={refs[7]} url={urls[[7]].url} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(7,true)} onPause={() => handlePlayStateChange(7,false)}/>
        </div>
      </div>
    )
  }
  //9
  if(urls.length > 8){
    obgrids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-6">
        <div className="bg-black col-span-2">
          <ReactPlayer id="1" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
        <div className="bg-black col-span-2">
          <ReactPlayer id="2" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
        </div>
        <div className="bg-black col-span-2">
          <ReactPlayer id="3" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(3,true)} onPause={() => handlePlayStateChange(3,false)}/>
        </div>

        <div className="bg-black col-span-3">
          <ReactPlayer id="4" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(4,true)} onPause={() => handlePlayStateChange(4,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="5" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(5,true)} onPause={() => handlePlayStateChange(5,false)}/>
        </div>

        <div className="bg-black col-span-2">
          <ReactPlayer id="6" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(6,true)} onPause={() => handlePlayStateChange(6,false)}/>
        </div>
        <div className="bg-black col-span-2">
          <ReactPlayer id="7" ref={refs[7]} url={urls[[7]].url} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(7,true)} onPause={() => handlePlayStateChange(7,false)}/>
        </div>
        <div className="bg-black col-span-2">
          <ReactPlayer id="8" ref={refs[8]} url={urls[[8]].url} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(8,true)} onPause={() => handlePlayStateChange(8,false)}/>
        </div>
      </div>
    )
  }

  //10
  if(urls.length > 9){
    obgrids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-3">
        <div className="bg-black col-span-1">
          <ReactPlayer id="1" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="2" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="3" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(3,true)} onPause={() => handlePlayStateChange(3,false)}/>
        </div>

        <div className="bg-black col-span-1">
          <ReactPlayer id="4" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(4,true)} onPause={() => handlePlayStateChange(4,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="5" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(5,true)} onPause={() => handlePlayStateChange(5,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="6" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(6,true)} onPause={() => handlePlayStateChange(6,false)}/>
        </div>

        <div className="bg-black col-span-1">
          <ReactPlayer id="7" ref={refs[7]} url={urls[[7]].url} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(7,true)} onPause={() => handlePlayStateChange(7,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="8" ref={refs[8]} url={urls[[8]].url} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(8,true)} onPause={() => handlePlayStateChange(8,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="9" ref={refs[9]} url={urls[[9]].url} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(9,true)} onPause={() => handlePlayStateChange(9,false)}/>
        </div>
      </div>
    )
  }
  //11
  if(urls.length > 10){
    obgrids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-12">
        <div className="bg-black col-span-3">
          <ReactPlayer id="1" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="2" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="3" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(3,true)} onPause={() => handlePlayStateChange(3,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="4" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(4,true)} onPause={() => handlePlayStateChange(4,false)}/>
        </div>

        <div className="bg-black col-span-4">
          <ReactPlayer id="5" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(5,true)} onPause={() => handlePlayStateChange(5,false)}/>
        </div>
        <div className="bg-black col-span-4">
          <ReactPlayer id="6" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(6,true)} onPause={() => handlePlayStateChange(6,false)}/>
        </div>
        <div className="bg-black col-span-4">
          <ReactPlayer id="7" ref={refs[7]} url={urls[[7]].url} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(7,true)} onPause={() => handlePlayStateChange(7,false)}/>
        </div>

        <div className="bg-black col-span-4">
          <ReactPlayer id="8" ref={refs[8]} url={urls[[8]].url} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(8,true)} onPause={() => handlePlayStateChange(8,false)}/>
        </div>
        <div className="bg-black col-span-4">
          <ReactPlayer id="9" ref={refs[9]} url={urls[[9]].url} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(9,true)} onPause={() => handlePlayStateChange(9,false)}/>
        </div>
        <div className="bg-black col-span-4">
          <ReactPlayer id="10" url={urls[10].url} width="100%" height="100%" volume={volumeState[10]} playing={playState[10]} controls={true} onPlay={() => handlePlayStateChange(10,true)} onPause={() => handlePlayStateChange(10,false)}/>
        </div>
      </div>
    )
  }

  //12
  if(urls.length > 11){
    obgrids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-12">
        <div className="bg-black col-span-3">
          <ReactPlayer id="1" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="2" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="3" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(3,true)} onPause={() => handlePlayStateChange(3,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="4" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(4,true)} onPause={() => handlePlayStateChange(4,false)}/>
        </div>

        <div className="bg-black col-span-3">
          <ReactPlayer id="5" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(5,true)} onPause={() => handlePlayStateChange(5,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="6" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(6,true)} onPause={() => handlePlayStateChange(6,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="7" ref={refs[7]} url={urls[[7]].url} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(7,true)} onPause={() => handlePlayStateChange(7,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="8" ref={refs[8]} url={urls[[8]].url} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(8,true)} onPause={() => handlePlayStateChange(8,false)}/>
        </div>

        <div className="bg-black col-span-4">
          <ReactPlayer id="9" ref={refs[9]} url={urls[[9]].url} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(9,true)} onPause={() => handlePlayStateChange(9,false)}/>
        </div>
        <div className="bg-black col-span-4">
          <ReactPlayer id="10" url={urls[10].url} width="100%" height="100%" volume={volumeState[10]} playing={playState[10]} controls={true} onPlay={() => handlePlayStateChange(10,true)} onPause={() => handlePlayStateChange(10,false)}/>
        </div>
        <div className="bg-black col-span-4">
          <ReactPlayer id="11" url={urls[11].url} width="100%" height="100%" volume={volumeState[11]} playing={playState[11]} controls={true} onPlay={() => handlePlayStateChange(11,true)} onPause={() => handlePlayStateChange(11,false)}/>
        </div>
      </div>
    )
  }
  //13
  if(urls.length > 12){
    obgrids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-3">
        <div className="bg-black col-span-1">
          <ReactPlayer id="1" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="2" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="3" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(3,true)} onPause={() => handlePlayStateChange(3,false)}/>
        </div>

        <div className="bg-black col-span-1">
          <ReactPlayer id="4" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(4,true)} onPause={() => handlePlayStateChange(4,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="5" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(5,true)} onPause={() => handlePlayStateChange(5,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="6" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(6,true)} onPause={() => handlePlayStateChange(6,false)}/>
        </div>

        <div className="bg-black col-span-1">
          <ReactPlayer id="7" ref={refs[7]} url={urls[[7]].url} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(7,true)} onPause={() => handlePlayStateChange(7,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="8" ref={refs[8]} url={urls[[8]].url} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(8,true)} onPause={() => handlePlayStateChange(8,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="9" ref={refs[9]} url={urls[[9]].url} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(9,true)} onPause={() => handlePlayStateChange(9,false)}/>
        </div>

        <div className="bg-black col-span-1">
          <ReactPlayer id="10" url={urls[10].url} width="100%" height="100%" volume={volumeState[10]} playing={playState[10]} controls={true} onPlay={() => handlePlayStateChange(10,true)} onPause={() => handlePlayStateChange(10,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="11" url={urls[11].url} width="100%" height="100%" volume={volumeState[11]} playing={playState[11]} controls={true} onPlay={() => handlePlayStateChange(11,true)} onPause={() => handlePlayStateChange(11,false)}/>
        </div>
        <div className="bg-black col-span-1">
          <ReactPlayer id="12" url={urls[12].url} width="100%" height="100%" volume={volumeState[12]} playing={playState[12]} controls={true} onPlay={() => handlePlayStateChange(12,true)} onPause={() => handlePlayStateChange(12,false)}/>
        </div>
      </div>
    )
  }
  //14
  if(urls.length > 13){
    obgrids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-12">
        <div className="bg-black col-span-3">
          <ReactPlayer id="1" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="2" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="3" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(3,true)} onPause={() => handlePlayStateChange(3,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="4" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(4,true)} onPause={() => handlePlayStateChange(4,false)}/>
        </div>

        <div className="bg-black col-span-4">
          <ReactPlayer id="5" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(5,true)} onPause={() => handlePlayStateChange(5,false)}/>
        </div>
        <div className="bg-black col-span-4">
          <ReactPlayer id="6" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(6,true)} onPause={() => handlePlayStateChange(6,false)}/>
        </div>
        <div className="bg-black col-span-4">
          <ReactPlayer id="7" ref={refs[7]} url={urls[[7]].url} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(7,true)} onPause={() => handlePlayStateChange(7,false)}/>
        </div>

        <div className="bg-black col-span-4">
          <ReactPlayer id="8" ref={refs[8]} url={urls[[8]].url} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(8,true)} onPause={() => handlePlayStateChange(8,false)}/>
        </div>
        <div className="bg-black col-span-4">
          <ReactPlayer id="9" ref={refs[9]} url={urls[[9]].url} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(9,true)} onPause={() => handlePlayStateChange(9,false)}/>
        </div>
        <div className="bg-black col-span-4">
          <ReactPlayer id="10" url={urls[10].url} width="100%" height="100%" volume={volumeState[10]} playing={playState[10]} controls={true} onPlay={() => handlePlayStateChange(10,true)} onPause={() => handlePlayStateChange(10,false)}/>
        </div>

        <div className="bg-black col-span-4">
          <ReactPlayer id="11" url={urls[11].url} width="100%" height="100%" volume={volumeState[11]} playing={playState[11]} controls={true} onPlay={() => handlePlayStateChange(11,true)} onPause={() => handlePlayStateChange(11,false)}/>
        </div>
        <div className="bg-black col-span-4">
          <ReactPlayer id="12" url={urls[12].url} width="100%" height="100%" volume={volumeState[12]} playing={playState[12]} controls={true} onPlay={() => handlePlayStateChange(12,true)} onPause={() => handlePlayStateChange(12,false)}/>
        </div>
        <div className="bg-black col-span-4">
          <ReactPlayer id="13" url={urls[13].url} width="100%" height="100%" volume={volumeState[13]} playing={playState[13]} controls={true} onPlay={() => handlePlayStateChange(13,true)} onPause={() => handlePlayStateChange(13,false)}/>
        </div>
      </div>
    )
  }
  //15
  if(urls.length > 14){
    obgrids.push( 
      <div className="bg-black gap-1 h-[95%] grid grid-cols-12">
        <div className="bg-black col-span-3">
          <ReactPlayer id="1" ref={refs[1]} url={urls[[1]].url} width="100%" height="100%" volume={volumeState[1]} playing={playState[1]} controls={true} onPlay={() => handlePlayStateChange(1,true)} onPause={() => handlePlayStateChange(1,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="2" ref={refs[2]} url={urls[[2]].url} width="100%" height="100%" volume={volumeState[2]} playing={playState[2]} controls={true} onPlay={() => handlePlayStateChange(2,true)} onPause={() => handlePlayStateChange(2,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="3" ref={refs[3]} url={urls[[3]].url} width="100%" height="100%" volume={volumeState[3]} playing={playState[3]} controls={true} onPlay={() => handlePlayStateChange(3,true)} onPause={() => handlePlayStateChange(3,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="4" ref={refs[4]} url={urls[[4]].url} width="100%" height="100%" volume={volumeState[4]} playing={playState[4]} controls={true} onPlay={() => handlePlayStateChange(4,true)} onPause={() => handlePlayStateChange(4,false)}/>
        </div>

        <div className="bg-black col-span-4">
          <ReactPlayer id="5" ref={refs[5]} url={urls[[5]].url} width="100%" height="100%" volume={volumeState[5]} playing={playState[5]} controls={true} onPlay={() => handlePlayStateChange(5,true)} onPause={() => handlePlayStateChange(5,false)}/>
        </div>
        <div className="bg-black col-span-4">
          <ReactPlayer id="6" ref={refs[6]} url={urls[[6]].url} width="100%" height="100%" volume={volumeState[6]} playing={playState[6]} controls={true} onPlay={() => handlePlayStateChange(6,true)} onPause={() => handlePlayStateChange(6,false)}/>
        </div>
        <div className="bg-black col-span-4">
          <ReactPlayer id="7" ref={refs[7]} url={urls[[7]].url} width="100%" height="100%" volume={volumeState[7]} playing={playState[7]} controls={true} onPlay={() => handlePlayStateChange(7,true)} onPause={() => handlePlayStateChange(7,false)}/>
        </div>

        <div className="bg-black col-span-4">
          <ReactPlayer id="8" ref={refs[8]} url={urls[[8]].url} width="100%" height="100%" volume={volumeState[8]} playing={playState[8]} controls={true} onPlay={() => handlePlayStateChange(8,true)} onPause={() => handlePlayStateChange(8,false)}/>
        </div>
        <div className="bg-black col-span-4">
          <ReactPlayer id="9" ref={refs[9]} url={urls[[9]].url} width="100%" height="100%" volume={volumeState[9]} playing={playState[9]} controls={true} onPlay={() => handlePlayStateChange(9,true)} onPause={() => handlePlayStateChange(9,false)}/>
        </div>
        <div className="bg-black col-span-4">
          <ReactPlayer id="10" url={urls[10].url} width="100%" height="100%" volume={volumeState[10]} playing={playState[10]} controls={true} onPlay={() => handlePlayStateChange(10,true)} onPause={() => handlePlayStateChange(10,false)}/>
        </div>

        <div className="bg-black col-span-3">
          <ReactPlayer id="11" url={urls[11].url} width="100%" height="100%" volume={volumeState[11]} playing={playState[11]} controls={true} onPlay={() => handlePlayStateChange(11,true)} onPause={() => handlePlayStateChange(11,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="12" url={urls[12].url} width="100%" height="100%" volume={volumeState[12]} playing={playState[12]} controls={true} onPlay={() => handlePlayStateChange(12,true)} onPause={() => handlePlayStateChange(12,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="13" url={urls[13].url} width="100%" height="100%" volume={volumeState[13]} playing={playState[13]} controls={true} onPlay={() => handlePlayStateChange(13,true)} onPause={() => handlePlayStateChange(13,false)}/>
        </div>
        <div className="bg-black col-span-3">
          <ReactPlayer id="14" url={urls[14].url} width="100%" height="100%" volume={volumeState[14]} playing={playState[14]} controls={true} onPlay={() => handlePlayStateChange(14,true)} onPause={() => handlePlayStateChange(14,false)}/>
        </div>
      </div>
    )
  }

  if(gridMode < 0 &&  gridMode > -2){
    return grids[playState.length -1];
  }else if(gridMode < -1){
    return obgrids[playState.length -1];
  }else{
    return (
    <div className="bg-black gap-1 flex-1 grid grid-cols-1">
      <div className="bg-black">
        <ReactPlayer id="0" url={urls[gridMode].url} width="100%" height="100%" volume={volumeState[gridMode]} playing={playState[gridMode]} controls={true} onPlay={() => handlePlayStateChange(0,true)} onPause={() => handlePlayStateChange(0,false)}/>
      </div>
    </div>
    )
  }


  /*
  if(!onboardsOnly){
    return grids[playState.length -1];
  }else{
    return obgrids[playState.length -1];
  }
  */
}

export default Grid

