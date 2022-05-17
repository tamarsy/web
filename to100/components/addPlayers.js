import React from 'react'
import Player from './player'

function AddPlayers(props){
    
    let allPlayers = props.players.map((p, i) => <Player key={p.id} id={p.name} changeNumber={props.changeNumber}
        name={p.name} number={p.currentNumber} scores={p.currentScores} steps={p.currentSteps} newGame={props.newGame}
        outOfGame={props.outOfGame} isPlay={props.isPlay} setMassage={props.setMassage} massage={p.massage}
        currentPlayer={(props.currentPlayer === i)?1:0}/>);

    return (
        <div>
            {allPlayers}
        </div>
    )
}

export default AddPlayers;