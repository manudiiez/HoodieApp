/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { Routes, Route, } from "react-router-dom";
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import Home from "./components/Home";
import ItemUserContainer from "./components/ItemUserContainer";
import ItemOrdersContainer from "./components/ItemOrdersContainer";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import ProtectedAdminRoute from "./components/protected/ProtectedAdminRoute";
import ItemAdminContainer from "./components/ItemAdminContainer";
import ItemAboutusContainer from "./components/ItemAboutusContainer";

/* --------------------------------- CONTEXT -------------------------------- */
import CartProvider from './context/CartContext'
import { AuthProvider } from "./context/AuthContext";


function App() {

  return (
    <div>
      <CartProvider>
        <AuthProvider>
          <NavBar/>
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/home" element={<Home />} />
              <Route path="/aboutus" element={<ItemAboutusContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/login" element={<ItemUserContainer />} />
              {/* RUTAS PROTEGIDAS */}
              <Route path="/cart" element={
                <ProtectedRoute>
                  <CartContainer />
                </ProtectedRoute>
              }/>
              <Route path="/orders" element={
                <ProtectedRoute>
                  <ItemOrdersContainer />
                </ProtectedRoute>
              }/>
              <Route path="/admin" element={
                <ProtectedAdminRoute>
                  <ItemAdminContainer />
                </ProtectedAdminRoute>
              }/>
              {/* FILTROS */}
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/color/:colorId" element={<ItemListContainer />} />
              <Route path="/modelo/:modeloId" element={<ItemListContainer />} />
              <Route path="/estilo/:estiloId" element={<ItemListContainer />} />

            </Routes>
          </main>
        </AuthProvider>
      </CartProvider>
    </div>
  );
}

export default App;