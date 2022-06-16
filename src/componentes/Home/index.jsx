import "./style.css"
import Card from "../Card";
import { useState } from "react";

const Home = ({finances, getFinances}) => {

    const [filterInput, setfilterInput] = useState("");

    
    return (
        
        <div className="home-container">
            <h1>wishs</h1>
            <input
            value={filterInput}
            onChange={(event) => {setfilterInput(event.target.value)}}
            placeholder="Buscar Desejo" />
            <div>
                {filterInput !== "" 
                ? finances.filter(element => element.nome.toLowerCase().includes(filterInput.toLocaleLowerCase())).map((element) => {
                    return <Card
                    getFinances={getFinances}
                    key={element._id}
                    finances={element} />;
                })
                :
                finances.map((element) => {
                    return <Card
                    getFinances={getFinances}
                    key={element._id}
                    finances={element} />;
                })
                }
            </div>
        </div>
    )
};

export default Home;