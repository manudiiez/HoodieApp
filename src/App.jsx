/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { Routes, Route } from "react-router-dom";
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from "styled-components";
/* --------------------------------- SCREENS -------------------------------- */
import Home from "./components/Home";
import NavBar from "./components//NavBar/NavBar";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros/Nosotros";


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Nosotros" element={<Nosotros />} />

      </Routes>
    </div>
  );
}

export default App;