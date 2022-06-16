import "./style.css"
import ModalNewItem from '../Modals/ModalNewItem'
import {toast} from "react-hot-toast"
import { useState } from "react";

const Header = ({getFinances}) => {
    const [showModalCreate, setShowModalCreate] = useState(false);

    const handleShowModalCreate = () => {
        setShowModalCreate(!showModalCreate);
    };

    return(
        <>
        <div className="header-container">
            <div>
                
                <h2>Finance Wish List</h2>
            </div>
            <div className="header-container2">
            <div>
               <i onClick={() => toast.error("Sessão em desenvolvimento")} class="fa-solid fa-cart-shopping"></i>
            </div>
            <div>
                <i onClick={handleShowModalCreate} class="fa-solid fa-square-plus"></i>
            </div>
            </div>
        </div>
        {showModalCreate && <ModalNewItem getFinances={getFinances} closeModal={handleShowModalCreate} />}
        </>
    );
};

export default Header