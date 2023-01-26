import { useState } from "react";

import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import TransactionsPage from "./pages/transactions";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="transactions" element={<TransactionsPage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
