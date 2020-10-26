import React, {useState} from 'react'
import "./../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCommentAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const reactions = [
    {
        src: "https://www.pngkey.com/png/full/9-95628_fb-like-png-tatuajes-huella-de-perros.png",
        alt: "Like"
    },
    {
        src: "https://www.freeiconspng.com/thumbs/facebook-love-png/facebook-love-png-3.png",
        alt: "Love"
    },
    {
        src:"https://cdn.iconscout.com/icon/free/png-256/facebook-64-189766.png",
        alt: "Haha"
    },
    {
        src: "https://seeklogo.com/images/F/facebook-reaction-wow-logo-EE7EC7B5AC-seeklogo.com.png",
        alt: "Wow"
    },
    {
        src: "https://www.pngfind.com/pngs/m/90-904168_e6-facebook-cry-emoji-png-transparent-png.png",
        alt: "Cry"
    },
    {
        src: "https://www.pngfind.com/pngs/m/10-105083_facebook-angry-png-angry-facebook-emoji-transparent-png.png",
        alt: "Angry"
    },
    {
        src: "https://images-na.ssl-images-amazon.com/images/I/511UYyc8AhL._AC_SY355_PIbundle-2,TopRight,0,0_SH20_.jpg",
        alt: "Shit"
    }
]
function Footer(props) {
    const {nblikes, comments} = props
    const [likes, setLikes] = useState(nblikes)
    const [liked, setLiked] = useState(false)
    const [show, setShow] = useState(false)
    const [reac, setreac] = useState('Like')

    function handleReaction({alt}) {
        setreac(alt)
        setShow(false)
    }

    function Reaction({src, alt}) {
        return (
            <img src={src} alt={alt} onClick={()=>handleReaction({alt})} />
        )
    }

    function Reactions() {
        return (
            <>
                <div className="reactions">
                    {reactions.map((r, i) =>{
                        return(
                            <Reaction {...r} key={i}  />
                        )
                    })}
                </div>
            </>
        )
    }


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

        function showReactions() {
            setShow(true)
        }

        function hideReactions() {
            setShow(false)
        }
        return (
            <div>
                <ul className="button">
                    <li onMouseLeave={hideReactions} onMouseOver={showReactions}>
                        <FontAwesomeIcon style={{color:"gray"}} icon={ faThumbsUp }/>
                        <button style={liked?
                            {color: "blue"}: {color: "gray"}} onClick={()=> handleClick()}>{reac}</button>
                    </li>
                    <li>
                        <FontAwesomeIcon style={{color: "gray"}} icon= {faCommentAlt} />
                        <button>Comment</button>
                    </li>
                    <li>
                        <FontAwesomeIcon style={{color: "gray"}} icon= {faShareAlt} />
                        <button>Share</button>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <>
                {show? <Reactions /> : ""}
            <div className="reaction">

                <div className="likes">
                    <FontAwesomeIcon style={{color:"#55f", marginRight: '10px'}} icon={ faThumbsUp }/>
                    {likes}
                </div>
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
