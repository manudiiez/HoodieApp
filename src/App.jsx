/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { Routes, Route } from "react-router-dom";
/* --------------------------------- SCREENS -------------------------------- */
import Home from "./components/Home/Home";
import NavBar from "./components//NavBar/NavBar";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros/Nosotros";


function App() {
  return (
    <div>
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Nosotros" element={<Nosotros />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;