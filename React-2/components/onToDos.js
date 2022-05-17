import React from 'react'
import { BrowserRouter as Router, Link, useRouteMatch } from 'react-router-dom'


function OnToDos(props) {
    const { url } = useRouteMatch();
    let allTodos;
    let todos;
    const current = JSON.parse(localStorage.getItem('currentUser'))
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${current.id}`)
        .then((response) => response.json())
        .then((allTodos) => {
            return (
                <div> {todos = allTodos.map((todos, i) => { <Link to={`${url}/${i}`}>{todos} {<input type="checkbox" />}</Link> })}
                </div>
            )
        }
    )
}
export default OnToDos;