import "./App.css";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Footer from "./componentes/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

const App = () => {
  const [finances, setFinances] = useState([]);

  const getFinances = async () => {
    const response = await fetch("http://localhost:3010/finance/all");
    const financeList = await response.json();

    setFinances(financeList);
  };

  useEffect(() => {
    getFinances();
  }, []);
  return (
    <div>
      <Toaster position="bottom-center" />
      <Header getFinances={getFinances} />
      <Home finances={finances} getFinances={getFinances} />
      <Footer />
    </div>
  );
};

export default App;