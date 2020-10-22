import React from 'react'
import "./../App.css"

function Header({img, user, time}) {
    return (
        <div className="header">
            <div className="info">
                <img src={img} />
                {user}
                <span className="time">{time}</span>
            </div>
            <div>
                ...
            </div>
        </div>
    )
}

export default Header
