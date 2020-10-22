import React, {useState} from 'react'
import "./../App.css"

function Footer(props) {
    const {nblikes, comments} = props
    const [likes, setLikes] = useState(nblikes)
    const [liked, setLiked] = useState(false)

    function Button({type}) {
        const handleClick = (e)=>{
            if(liked) {
                setLiked(false)
                setLikes(likes - 1)
            }
            else {
                setLiked(true)
                setLikes(likes + 1)
            }
        }
        return (
            <div className="button">
                <a href="#" style={liked?
                {color: "blue"}: {color: "gray"}} onClick={()=> handleClick()}>{type}</a>
            </div>
        )
    }

    return (
        <>
            <div className="likes">
                {likes}
                <div>
                    {comments} Comments
                </div>
            </div>
            <div className="footer">
                <Button type="Like"/>
                <Button type="Comment"/>
                <Button type="Share"/>
            </div>
        </>
    )
}

export default Footer
