import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import Cart from "./components/Cart";
import pizzas from "./components/pizzas";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState(pizzas); // Cart inicializado con pizzas
  const [total, setTotal] = useState(0);

  // Calcular el total
  const calculateTotal = () => {
    const newTotal = cart.reduce(
      (acc, pizza) => acc + pizza.price * pizza.quantity,
      0
    );
    setTotal(newTotal);
  };

  // Cada vez que cambie el carrito, actualizamos el total
  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <div>
      <Navbar total={total} />
      <Header />
      <Home setCart={setCart} cart={cart} />
      {/* <Register /> */}
      {/* <Login /> */}
      <Cart cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
};

export default App;