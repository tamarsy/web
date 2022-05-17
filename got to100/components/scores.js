import React from "react"

function Scores(props){

    return(
        <div>
            <h1>wins =={'>'} {props.scores.length}</h1>
        </div>
    )
   
}
export default Scores