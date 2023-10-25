import './App.css';
import React, { useEffect, useState } from 'react';
import Main from './Component/MainScreen/Main';
import NavBar from './Component/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);

  const remove = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id ) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item =>{
      return item.quantity  >= 1
    });

    // Calculate the total sum based on the updated cart
    const newSum = updatedCart.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
    setCart(updatedCart);
    setSum(newSum);
  };

  const add = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    // Calculate the total sum based on the updated cart
    const newSum = updatedCart.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
    setCart(updatedCart);
    setSum(newSum);
  };

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    // Calculate the total sum based on the updated cart
    
  };
  useEffect(()=>{
    const newSum = cart.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
    setSum(newSum);
  },[cart])




  return (
    <BrowserRouter>
      <div className='bg-gray-900 w-screen text-white'>
        <NavBar cart={cart} sum={sum.toFixed(2)} remove={remove} add={add} quantity = {cart.length}/>
        <Main AddCart={addToCart} sum={sum.toFixed(2)} cart={cart} remove={remove} add = {add}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
