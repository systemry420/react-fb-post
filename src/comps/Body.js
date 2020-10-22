import React from 'react'
import "./../App.css"

function Body({body, likes, comments}) {
    return (
        <>
            <div className="body">
                <div className="text">
                    {body.text}
                </div>
                <img src={body.img} alt=""/>
            </div>
        </>
    )
}

export default Body
