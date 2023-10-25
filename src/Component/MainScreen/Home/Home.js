import React from 'react'

import Products from './Products'
import {Route, Routes } from 'react-router-dom'
import Checkout from './Checkout'
import Payment from './Payment'
import About from './About'

function Home({cart, AddCart , allProducts , remove, add , sum}) {
  
  
  return (
    <div className='bg-slate-600 p-10 ' >
      <Routes>
        <Route path='/' element={<Products AddCart = {AddCart} cart = {cart} allProducts = {allProducts}></Products>}></Route>
        <Route path="/checkout" element={<Checkout cart={cart} remove = {remove} add={add} sum = {sum}/>}></Route>
        <Route path='/payment-page' element={<Payment sum = {sum}></Payment>}></Route>
        <Route path='/Aboutus' element={<About></About>}></Route>
      </Routes>
    </div>
  )
}

export default Home