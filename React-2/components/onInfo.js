import { React } from 'react'


export default function OnInfo() {
    const current = JSON.parse(localStorage.getItem('currentUser'));
    return (
        <div>
            <p>id: {current.id}</p>
            <p> userName: {current.username}</p>
            <p>email: {current.email}</p>
            <p>address: </p>
            <p>street: {current.address.street}</p>
            <p>suite: {current.address.suite}</p>
            <p>city: {current.address.city}</p>
            <p>zipcode: {current.address.zipcode}</p>
            <p>geo:</p>
            <p>lat: {current.address.geo.lat}</p>
            <p>lng: {current.address.geo.lng}</p>
        </div>
    )
}