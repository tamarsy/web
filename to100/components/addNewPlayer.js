import React from "react"
import '../App.css';

//<p>engoy your game!!!</p>
function AddNewPlayer(props){

    const newPlayer = ()=>{
        const name = prompt("enter your name:");
        if (name) {
            alert(`hello ${name} 😍`);
            const number = Math.floor(Math.random() * 100);
            props.setPlayer(name, number, [], 0);
        }
    }

    const addUser = (!props.isPlay)? <button onClick={newPlayer}>add player</button>:<p>engoy your game!!!🏳‍🌈</p>

    return (
        <div>
            { addUser }
        </div>
    )
}


export default AddNewPlayer