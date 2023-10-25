import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar({ cart, sum, remove, add, quantity}) {
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <div className='items-center flex justify-around '>
      <Link to='/'>
        <img
          src={require('../Asset/logo.png')}
          className='w-16 h-16'
          alt='Logo'
        />
      </Link>
      <ul className='hidden lg:flex gap-10 justify-between items-center text-xl font-semibold'>
        <Link to='/'>Home</Link>
        <Link to='/Aboutus'>About Us</Link>
        <Link to="/checkout">Check out</Link>
      </ul>
      <div>
        <button
          onClick={() => setCartVisible(!cartVisible)}
          className='relative'
        >
          <img src={require('../Asset/cart.png')} alt='Cart'  className='w-12'/>
          {quantity > 0 && (
            <span className='absolute top-0 -right-4 bg-red-500 p-1 rounded-full w-8 h-8 text-white'>
              {quantity}
            </span>
          )}
        </button>
      </div>
      {cartVisible && (
        <div className='cart-container z-50 bg-slate-100 rounded-lg right-0 top-28 p-4 flex flex-col w-11/12 max-w-xl mx-auto lg:w-1/2 md:w-2/3 sm:w-2/3 gap-4 overflow-y-auto shadow-md absolute text-black h-2/3 overflow-Y-scroll'>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className='cart-item grid grid-cols-3 justify-between items-center gap-4 content-center justify-center'
            >
              <h1>{item.name}</h1>
              <p className='bg-slate-700 rounded-lg p-2 text-white text-center w-fit'>
                ${item.price}
              </p>
              <div className='flex justify-around items-center font-bold'>
                <button
                  onClick={() => remove(item.id)}
                  className='bg-red-500 text-white p-2 rounded-full w-10 h-10'
                >
                  {' '}
                  -{' '}
                </button>
                <h1>{item.quantity}</h1>
                <button
                  onClick={() => add(item.id)}
                  className='bg-green-500 text-white p-2 rounded-full w-10 h-10'
                >
                  {' '}
                  +{' '}
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className='text-center font-bold'>Cart is empty!</h1>
        )}
        <hr className='border-t border-slate-300 my-4' />
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <h1 className='text-xl font-semibold text-slate-800'>
            Total: ${sum}
          </h1>
          <div className='flex justify-center lg:justify-between'>
            <button
              onClick={() => setCartVisible(!cartVisible)}
              className='bg-red-400 w-1/2 lg:w-16 hover:bg-red-600 text-white rounded-xl p-2 mb-2 lg:mb-0'
            >
              Close
            </button>
            <Link
              to={'/checkout'}
              onClick={() => setCartVisible(!cartVisible)}
              className='bg-slate-500 text-white p-2 rounded-2xl w-34 m-1 hover:bg-slate-800'
            >
              Check-out
              <i
                className='fa fa-shopping-cart ml-2'
                style={{ fontSize: '20px' }}
              ></i>
            </Link>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default NavBar;
