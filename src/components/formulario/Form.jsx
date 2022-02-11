import React from 'react'
import './Form.css'

const Form = () => {
    return(
        <form className="formContainer">
            <h2 className="formTitle">No que está pensando?</h2>
            <input type="text" placeholder="Título da publicação" className="inputTitle"/>
            <textarea type="text" placeholder="Conteúdo da publicação" className="inputContent"/>
            <button type="submit" className="formBtn">Criar</button>
        </form>
    )
}

export default Form
