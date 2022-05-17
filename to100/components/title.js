import React from "react";
import AddNewPlayer from "./addNewPlayer";
import StartGame from "./startGame";

function Title(props){

    return(
        <div>
            <h1 id="getTo100">Get to 100!!!</h1>
            <StartGame setIsPlay={props.setIsPlay} isPlay={props.isPlay} newNumbers={props.newNumbers}/>
            <AddNewPlayer setPlayer={props.setPlayer}  isPlay={props.isPlay}/>
        </div>
    )
   
}
export default Title