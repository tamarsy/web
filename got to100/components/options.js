import React from "react";
import Got100 from "./got100";
import '../App.css';

function Options(props) {

    const number = props.number;

    let style = { display:"none" }

    if (props.isPlay && props.currentPlayer) {
        style = { display:"inline" }
    }

    let returnButtons =
            props.currentSteps === 20 || props.number === 100 ?
        <Got100 newGame={props.newGame} outOfGame={props.outOfGame} style={style} currentPlayer={props.currentPlayer} /> 
          : (
                    <div>
                        <button style={style} onClick={() => onclickOptions(number + 1)}>+1</button>
                        <button style={style} onClick={() => onclickOptions(number - 1)}>-1</button>
                        <button style={style} onClick={() => onclickOptions(number * 2)}>*2</button>
                        <button style={style} onClick={() => onclickOptions(Math.floor(number / 2))}>/2</button>
                        <button style={style} onClick={() => onclickOptions("change")}>swap!!!</button>
                    </div>);

    const onclickOptions = (number) => {
        if (props.isPlay && props.currentPlayer) {

            if (props.currentSteps === 19) {
                props.setMassage("failed😔! but dont despair, try again😜!");
            }

            if (number === 100) {
                props.setMassage("Well done😊😊😊!!!");
                props.currentScores.push(props.currentSteps);
            }

            props.changeNumber(number);
        }
    }

    return <div> { returnButtons }</div>

}
export default Options

