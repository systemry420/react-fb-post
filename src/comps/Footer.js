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
            <div>
                <ul className="button">
                    <li>
                        <a href="#" style={liked?
                        {color: "blue"}: {color: "gray"}} onClick={()=> handleClick()}>{type}</a>
                    </li>
                    <li><a href="#">Comment</a></li>
                    <li><a href="#">Share</a></li>
                </ul>
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
            </div>
        </>
    )
}

export default Footer
