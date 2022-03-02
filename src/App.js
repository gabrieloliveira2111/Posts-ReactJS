import React, { useState } from 'react'
import './App.css'
import Form from './components/form/Form'
import DeleteModal from './components/modals/DeleteModal'
import Post from './components/posts/Post'

function App() {

    const [post, setPost] = useState([])
    const [delModal, setDelModal] = useState(false)
    const [selectItem, setSelectItem] = useState()

    const handleAddPost = (name, email, comment) => {
        const newPost = {
            name: name,
            email: email,
            comment: comment
        }

        let newArray = [...post, newPost]
        setPost(newArray)
    }

    return (
        <>
            <Form handleAddPost={handleAddPost} />
            <Post
                post={post}
                delModal={delModal}
                setDelModal={setDelModal}
                setSelectItem={setSelectItem}
            />
            {delModal &&
                <DeleteModal
                    delModal={delModal}
                    setDelModal={setDelModal}
                    post={post}
                    setPost={setPost}
                    selectItem={selectItem}
                />
            }
        </>
    )
}

export default App
