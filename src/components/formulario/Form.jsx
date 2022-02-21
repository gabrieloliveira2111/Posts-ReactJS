import React, { useState } from 'react'
import './Form.css'


const Form = ({handleAddPost}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddPost(name, email, comment)
    }

    return (
        <form className="formContainer" onSubmit={handleSubmit}>
            <h2 className="title">Digite seu comentário</h2>
            <input 
                type="text" 
                placeholder="Nome completo" 
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="email" 
                placeholder="E-mail" 
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea 
                type="text" 
                placeholder="Comentário" 
                className="input formComments"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button 
                type="submit" 
                className="formBtn" 
                disabled={!name || !email || !comment}
            >Criar
            </button>
        </form>
    )
}

export default Form
