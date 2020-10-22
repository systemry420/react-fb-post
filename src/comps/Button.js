import React from 'react'
import "./../App.css"

function Button({type}) {
    return (
        <div className="button">
            <a href="#">{type}</a>
        </div>
    )
}

export default Button
