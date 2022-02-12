import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <form className="formContainer">
            <h2 className="title">No que está pensando?</h2>
            <input type="text" placeholder="Nome completo" className="input"/>
            <input type="email" placeholder="E-mail" className="input"/>
            <textarea type="text" placeholder="Conteúdo da publicação" className="input formContent"/>
            <button type="submit" className="formBtn">Criar</button>
        </form>
    )
}

export default Form
