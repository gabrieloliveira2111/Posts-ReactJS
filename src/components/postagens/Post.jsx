import React from 'react'
import './Post.css'
import HeadIcon from '../../Img/headshot.jpg'

const Post = ({post}) => {
    return (
        <>
            {post.map((item, index) =>
                <div key={`post-${index}`} className="postContainer">
                <div className="postContent">
                    <img src={HeadIcon} className="headIcon"></img>
                    <div className="postInfo">
                        <div className="info">{item.name}</div>
                        <div className="info">{item.email}</div>
                        <div className="info">{item.comment}</div>
                    </div>
                </div>
                <button className="postBtn">X</button>
                </div>
            )}
        </>
    )
}

export default Post
