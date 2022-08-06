/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { Routes, Route } from "react-router-dom";
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
/* --------------------------------- CONTEXT -------------------------------- */
import { CartContext, ThemeContext } from "./context/Context";

function App() {
  return (
    <div>
      <CartContext.Provider value={[]}>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/cart" element={<h1>Carrito</h1>} />

          </Routes>
        </main>
      </CartContext.Provider>
    </div>
  );
}

export default App;