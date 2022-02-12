import React from 'react'
import './Post.css'
import HeadIcon from '../../Img/headshot.jpg'

const Post = () => {
    return (
        <>
        <div className="postContainer">
            <img src={HeadIcon} className="headIcon"></img>
            <div className="postName">nome</div>
            <div className="postTitle">titulo</div>
            <div className="postContent">conteudo</div>
        </div>
        <div className="postContainer">
            <img src={HeadIcon} className="headIcon"></img>
            <div className="postName">nome</div>
            <div className="postEmail">email</div>
            <div className="postContent">conteudo</div>
         </div>
        </>
    )
}

export default Post
