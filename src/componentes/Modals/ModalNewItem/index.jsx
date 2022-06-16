import "./style.css";
import { useState } from "react";
import {toast} from "react-hot-toast"
import api from "../../../api";

const ModalNewItem = ({closeModal, getFinances}) => {
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [item, setItem] = useState("");

    const handleCreateItem = async () => {
        const newFinance = {
            descricao,
            valor,
            item
        }

        const response = await api.post("/finance/create", newFinance)

        if(response.status !== 201){
            return toast.error('Item não adicionado')
        }

        setDescricao("");
        setValor("");
        setItem("");
        closeModal();
        getFinances();
        return toast.success('Item adicionado com sucesso');
    }
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div>
                    <h2>ADICIONAR AO CARDÁPIO</h2>
                    <button onClick={closeModal}><i className="fa-solid fa-circle-xmark"></i></button>
                </div>
                <input
                placeholder="Descrição"
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
                name="descricao"/>
                <input
                placeholder="Valor"
                value={valor}
                onChange={(event) => setValor(event.target.value)}
                name="valor"
                type="number"/>
                <input
                placeholder="Preço"
                value={item}
                onChange={(event) => setItem(event.target.value)}
                name="item"
                type="boolean"/>
                <button onClick={handleCreateItem}><i className="fa-solid fa-square-plus"></i>Adicionar</button>
            </div>
        </div>
    )
}

export default ModalNewItem