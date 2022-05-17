
import React from "react"
import '../App.css';

function StartGame(props){

    const startGame = ()=>{
        props.setIsPlay(1);
    }

    const newNumbersIn = () => {
        props.newNumbers();
    }

    let massage = (!props.isPlay)? <button onClick={startGame}>start game</button>:<button onClick={newNumbersIn}>new game</button> ;

    return (
        <div>
            {massage}
        </div>
    )
}



export default StartGame