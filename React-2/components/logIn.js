
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function LogIn(props) {

    const [detailsState, setDetailsState] = useState({ username: '', password: "" });

    let history = useHistory();
    const handleChange = (event) => {

        const { value, name } = event.target;

        setDetailsState({ ...detailsState, [name]: value })
    }


    const inLogIn = (event) => {
        event.preventDefault();
        const { password, username } = event.target;
        fetch(`https://jsonplaceholder.typicode.com/users?username=${username.value}`)
            .then((response) => response.json())
            .then((users) => {
                const user = users[0];
                if (user && user.address.geo.lat.endsWith(password.value)) {
                    localStorage.setItem("currentUser", JSON.stringify(user))
                    history.push("/application");
                } else {
                    console.log("error")
                }
            });
    }


    return (
        <form onSubmit={inLogIn}>
            <input onChange={handleChange} type="text" value={detailsState.username} name="username" placeholder="username" />
            <input onChange={handleChange} type="password" value={detailsState.password} name="password" placeholder="password" />
            <button type="submit">log in</button>
        </form>
    )
}


export default LogIn;