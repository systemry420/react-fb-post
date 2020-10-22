import React from 'react'
import "./../App.css"
import Button from "./Button"

function Footer() {
    return (
        <div className="footer">
            <Button type="Like"/>
            <Button type="Comment"/>
            <Button type="Share"/>
        </div>
    )
}

export default Footer
