import "./style.css";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../../api";

const ModalEditItem = ({closeModal, finances, getFinances}) => {
    const [descricao, setDescricao] = useState(finances.descricao);
    const [valor, setValor] = useState(finances.valor);
    const [item, setItem] = useState(finances.item);


    const handleEditItem = async () => {
        const refreshFinance = {
            descricao,
            valor,
            item
        }

        const response = await api.put(`/finance/refresh/${finances._id}`, refreshFinance)

        if(response.status !== 200){
            return toast.error('Atualização não funfou')
        }

        closeModal();
        getFinances();
        return toast.success('Item atualizado com sucesso');
    }
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div>
                    <h2>ADICIONAR DESEJO</h2>
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
                <button onClick={handleEditItem}><i className="fa-solid fa-square-plus"></i>atualizar</button>
            </div>
        </div>
    )
}

export default ModalEditItem