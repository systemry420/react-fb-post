import React from 'react'
import "./../App.css"

function Body({body, likes, comments}) {
    return (
        <>
            <div className="body">
                {body.text}
                <img src={body.img} alt=""/>
            </div>
        </>
    )
}

export default Body
