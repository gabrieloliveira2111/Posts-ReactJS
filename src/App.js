import React, { useState } from 'react'
import './App.css'
import Form from './components/formulario/Form'
import Post from './components/postagens/Post'

function App() {

    const [post, setPost] = useState([])

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
            <Form handleAddPost={handleAddPost}/>
            <Post post={post}/>
        </>
    )
}

export default App
