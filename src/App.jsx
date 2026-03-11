import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import { Header } from "./features/layout/components/Header";
import { Content } from "./features/layout/components/Content";
import { Footer } from "./features/layout/components/Footer";

// Views
import { Articles } from "./features/views/components/Articles";
import Offers from "./features/views/components/Offers";

// Auth
import { Myaccount } from "./features/auth/components/Myaccount";
import { Carrito } from "./features/auth/components/Carrito";
import { Myfavorities } from "./features/auth/components/Myfavorities";

function App() {

  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem("favoritos");
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const [carrito, setCarrito] = useState(() => {
    const guardados = localStorage.getItem("carrito");
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <BrowserRouter>

      <Header 
        favoritos={favoritos.length} 
        carrito={carrito.length} 
      />

      <Routes>
        <Route path="/" element={<Content />} />

        <Route
          path="/Articles"
          element={
            <Articles
              favoritos={favoritos}
              setFavoritos={setFavoritos}
              carrito={carrito}
              setCarrito={setCarrito}
            />
          }
        />

        <Route path="/Offers" element={<Offers />} />
        <Route path="/Myaccount" element={<Myaccount />} />

        <Route
          path="/Carrito"
          element={
            <Carrito
              carrito={carrito}
              setCarrito={setCarrito}
            />
          }
        />

        <Route
          path="/Myfavorities"
          element={
            <Myfavorities
              favoritos={favoritos}
              setFavoritos={setFavoritos}
            />
          }
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;