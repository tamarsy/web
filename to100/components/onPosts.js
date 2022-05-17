import React from 'react'


function OnPosts(props) {

    const handleClick = (event) => {

    }
    
    const UserId = JSON.parse(localStorage.getItem('currentUser')).id;
    let usr;
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${UserId}`)
        .then((response) => response.json())
        .then((allPosts) => {
            usr = allPosts.map((posts, index) => <Link to={`/${index}`} onClick={handleClick} key={posts.id}>`${index} : ${posts.title}`</Link>)
        });


    return (
        <div>
            <h1>posts</h1>
            {usr}
        </div>)
}


export default OnPosts;