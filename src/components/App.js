import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import NavBar from "./NavBar";

import emperorTamarin from "../imgs/emperor-tamarin.jpeg";
import japaneseMacaque from "../imgs/japanese-macaque.jpeg";
import proboscis from "../imgs/proboscis-monkey.jpeg";
import howler from "../imgs/howler-monkey.jpeg";
import mandrill from "../imgs/mandrill.jpeg";


const App = () => {

  const [cart, setCart] = useState([]);

  const merch = [
    { name: "Emperor Tamarin", price: "3000", image: emperorTamarin },
    { name: "Japanese Macaque", price: "4000", image: japaneseMacaque },
    { name: "Proboscis Monkey", price: "3500", image: proboscis },
    { name: "Howler Monkey", price: "3500", image: howler },
    { name: "Mandrill", price: "5500", image: mandrill },
  ];

  const addItemToCart = (ev) => {
    const newItemName = ev.target.getAttribute('data-name');
    const newItemPrice = ev.target.getAttribute('data-price');
    const newItemQuantity = document.getElementById(`${ev.target.getAttribute('data-name')}`).value
    if (cart.filter((e)=>e.name === newItemName ).length > 0) {
      const updatedCart = cart.map(el => el.name === newItemName ? {...el, 
        quantity: parseInt(el.quantity, 10) + parseInt(newItemQuantity, 10)}: el)
      setCart(updatedCart)
    }
    else { 
      setCart([...cart, {name: newItemName, price: parseInt(newItemPrice,10), quantity: parseInt(newItemQuantity,10 )   }])
    }
   console.log(cart)
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/shop" 
          element={<Shop merch = {merch} addItemToCart = {addItemToCart} cart ={cart}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;