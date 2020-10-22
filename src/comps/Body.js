import React from 'react'
import "./../App.css"

function Body({body}) {
    return (
        <div className="body">
            {body.text}
            <img src={body.img} />
        </div>
    )
}

export default Body
