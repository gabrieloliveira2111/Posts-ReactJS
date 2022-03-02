import React, { useState } from 'react'
import './Form.css'


const Form = ({ handleAddPost }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        const validateName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/.test(name)
        e.preventDefault()
        if (validateName) {
            handleAddPost(name, email, comment)
        } else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
    }


    return (
        <form className="formContainer" onSubmit={handleSubmit}>
            <h2 className="title">Digite seu comentário</h2>
            <input
                type="text"
                placeholder="Nome completo"
                className="input"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="E-mail"
                className="input"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                type="text"
                placeholder="Comentário"
                className="input formComments"
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button
                type="submit"
                className="formBtn"
                disabled={!name || !email || !comment}
            >Criar
            </button>
            {error && <span className="error">Nome inválido</span>}
        </form>
    )
}

export default Form
