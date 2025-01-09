import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./context/NotificationContext";
import NavBar from "./components/NavBar/NavBar";

// Importación directa de componentes
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
// import ProductUpload from "./components/ProductsUpload/ProductUpload";

function App() {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <CartProvider>
          <NavBar title="Tienda Nastee" />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* <Route path="/productupload" element={<ProductUpload />} /> */}
            <Route path="*" element={<h1>:( Página no encontrada</h1>} />
          </Routes>
        </CartProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
}

export default App;
