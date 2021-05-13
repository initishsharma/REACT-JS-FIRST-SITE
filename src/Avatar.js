import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';
import 'tachyons'
import Avatarlist from './Avatarlist'


class Avatar extends Component {

    constructor(){
        super();
        this.state = {
            name: "Best CYBERGROUP Dev0ps"
        }
    }

    namechange() {
        this.setState({
            name: "They are all deployed"
        })
    }


    render() {
        const avaratarraylist = [
            {
                id: 1,
                name: "Nitish",
                work: "Web Developer"
            },
            {
                id: 2,
                name: "Varun",
                work: "Web Developer"
            },
            {
                id: 3,
                name: "Bhanuja",
                work: "Web Developer"
            },
            {
                id: 4,
                name: "Syed Ali",
                work: "Web Developer"
            }
        ]

        const arrayavatarcard = avaratarraylist.map((Avatarcard, i) => {
            return <Avatarlist key={i}
                id={avaratarraylist[i].id}
                name={avaratarraylist[i].name}
                work={avaratarraylist[i].work} />
        })

        return (
            <div className="mainpage">
                <h1 className="tc">{this.state.name}</h1>
                {arrayavatarcard}
                <button onClick= { () => this.namechange()} className="btn">REFRESH</button>
            </div>
        )

    }
}




export default Avatar;