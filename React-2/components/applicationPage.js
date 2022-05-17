import React, { useState } from 'react'
import { BrowserRouter as Router, Link, useRouteMatch } from 'react-router-dom'


function Appliction() {

    const { url } = useRouteMatch();

    return (
        <div>
            <Router>
                <Link to={`${url}/logOut`}>logOut            </Link>
                <Link to={`${url}/Albums`}>Albums           </Link>
                <Link to={`${url}/Posts`}>Posts            </Link>
                <Link to={`${url}/Todos`}>Todos             </Link>
                <Link to={`${url}/info`}>info               </Link>
            </Router>
            <br></br>
            <h4>My Name Is: {JSON.parse(localStorage.getItem('currentUser')).username}</h4>
        </div>
    )
}

export default Appliction;