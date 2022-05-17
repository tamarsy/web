import React from "react"
import '../App.css';

function Got100(props){
    
    const outOfGame = ()=>{
        if (props.currentPlayer) props.outOfGame();
    }

    const newGame = ()=>{
        if (props.currentPlayer) props.newGame();
    }

    return(
        <div>
            <button style={props.style} onClick={ newGame }>new game</button>
            <button style={props.style} onClick={ outOfGame }>get out of the game</button>
        </div>
    );
    
}
export default Got100


