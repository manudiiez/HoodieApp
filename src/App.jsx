/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import Home from "./components/Home";
import UserContainer from "./components/UserContainer";

/* --------------------------------- CONTEXT -------------------------------- */
import CartProvider from './context/CartContext'
import UserProvider from "./context/UserContext";

function App() {
  
  useEffect(()=> {
    // uploadFiles()
  }, [])

  return (
    <div>
      <CartProvider>
        <UserProvider>
          <NavBar/>
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/home" element={<Home />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/login" element={<UserContainer />} />
              {/* FILTROS */}
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/color/:colorId" element={<ItemListContainer />} />
              <Route path="/modelo/:modeloId" element={<ItemListContainer />} />
              <Route path="/estilo/:estiloId" element={<ItemListContainer />} />

            </Routes>
          </main>
        </UserProvider>
      </CartProvider>
    </div>
  );
}

export default App;