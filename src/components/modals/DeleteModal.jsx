import React from 'react'
import './DeleteModal.css'

const DeleteModal = ({ delModal, setDelModal, post, setPost, selectItem }) => {

    const handleDelete = () => {
        const newArray = post.filter((item, index) => index !== selectItem)
        setPost(newArray)
        setDelModal(false)
    }

    return (
        <div className="modal">
            <div className="delModalContent">
                <p>Tem certeza que deseja excluir esse item?</p>
                <div className="containerDelBtn">
                    <button className="btnDelModal" onClick={() => setDelModal(!delModal)}>Cancelar</button>
                    <button className="btnDelModal" onClick={() => handleDelete()}>OK</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
