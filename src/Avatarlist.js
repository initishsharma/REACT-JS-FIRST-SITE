import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Avatar'

const Avatarlist = (props) => {
    return (
        <div className="avatarstyle ma4 bg-white dib pa4 tc grow shadow-5"> 
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
        <h1>{props.name}</h1> 
    <p>{props.work}</p>
    </div>
    )
}

export default Avatarlist;