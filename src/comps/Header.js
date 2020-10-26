import React from 'react'
import "./../App.css"

function Header({img, user, time}) {
    return (
        <div className="header">
            <div className="info">
                <img src={(img)} alt=""/>
                <div className="name">
                    <span>{user}</span>
                    <span className="time">{time}</span>
                </div>
            </div>
            <div style={{color: "gray", fontSize: "2.2em", lineHeight:0.5}}>
                ...
            </div>
        </div>
    )
}

export default Header
