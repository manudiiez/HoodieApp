/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { Routes, Route } from "react-router-dom";
/* --------------------------------- SCREENS -------------------------------- */
import Home from "./components/Home/Home";
import NavBar from "./components//NavBar/NavBar";
import Nosotros from "./components/Nosotros/Nosotros";
import Tienda from "./components/Tienda/Tienda";


function App() {
  return (
    <div>
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/Nosotros" element={<Nosotros />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;