/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
/* --------------------------------- SCREENS -------------------------------- */


function App() {
  return (
    <div>
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;