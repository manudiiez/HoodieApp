/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
/* --------------------------------- CONTEXT -------------------------------- */
import CartProvider from './context/CartContext'
import { uploadFiles } from "./data/Data";


function App() {
  
  useEffect(()=> {
    // uploadFiles()
  }, [])

  return (
    <div>
      <CartProvider>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />


          </Routes>
        </main>
      </CartProvider>
    </div>
  );
}

export default App;