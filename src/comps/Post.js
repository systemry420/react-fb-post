import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'


function Post({img, user, time, body, likes}) {
    return (
        <div>
            <div className="post">
                <Header img={img} user={user} time={time}/>
                <Body body={body}/>
                <Footer likes={likes}/>
            </div>
        </div>
    )
}

export default Post
