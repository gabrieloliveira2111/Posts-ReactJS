import React from 'react'
import HeadIcon from '../../Img/headshot.jpg'
import './Post.css'

const Post = ({ post, delModal, setDelModal, setSelectItem }) => {

    const OpenDelModal = (index) => {
        setDelModal(!delModal)
        setSelectItem(index)
    }

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
                    <button className="postBtn" onClick={() => OpenDelModal(index)}>X</button>
                </div>
            )}
        </>
    )
}

export default Post
