import React from 'react'
import { useHistory } from 'react-router-dom';



export default function OnLogOut() {

    let history = useHistory();


    const handleClick = () => {
        localStorage.setItem("currentUser",JSON.stringify(null));
        history.goForward("/logIn");
        history.push("/logIn");
    }

    return (
        <div>
            <p>log out</p>
            <button onClick={handleClick}>log out</button>
        </div>
    )
}