import "./style.css"
import {toast} from "react-hot-toast"
import ModalDeleteItem from "../Modals/ModalDeleteItem";
import ModalEditItem from "../Modals/ModalEditItem";
import { useState } from "react";

const Card = ({finances, getFinances}) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const handleShowDeleteModal = () => {
        setShowDeleteModal(!showDeleteModal)
    };

    const handleShowEditModal = () => {
        setShowEditModal(!showEditModal);
    };
    return (
        <>
            <div className="card-container">
                <h2> {finances.descricao}</h2>
                <h3>Ingredientes: {finances.valor}</h3>
                <p>R$ {finances.meta}</p>
                <div className="icons">
                    <button onClick={() => toast.error("Sessão em desenvolvimento")}>Adicionar</button>
                    <i onClick={handleShowEditModal} className="fa-solid fa-pen-to-square"></i>
                    <i onClick={handleShowDeleteModal} className="fa-solid fa-trash"></i>
                </div>
            </div>
            {showDeleteModal && <ModalDeleteItem closeModal={handleShowDeleteModal} finances={finances} getFinances={getFinances} />}
            {showEditModal && <ModalEditItem closeModal={handleShowEditModal} finances={finances} getFinances={getFinances} />}
        </>
    );
};

export default Card