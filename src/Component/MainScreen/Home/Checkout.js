import React from 'react';
import { Link } from 'react-router-dom';

function Checkout({ cart, remove, add, sum }) {
  return (
    <div className='bg-slate-600 p-4'>
      <h1 className='text-white font-bold text-3xl text-center'>Total: ${sum}</h1>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div
            key={item.id}
            className='cart-item grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-4 content-center justify-center bg-slate-300 m-5 p-5 text-black rounded-xl'
          >
            <img
              src={require(`../../Asset/${item.category}/${item.img}.png`)}
              alt=''
              className='h-36'
            />
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
        <h1 className='text-center font-bold '>Cart is empty!</h1>
      )}
      <hr className='border-t border-slate-300 my-4' />
      <Link
        to='/Payment-page'
        className='block w-full text-center rounded-lg text-white bg-slate-500 py-2 rounded-2xl hover:bg-slate-800'
      >
        Buy Now
      </Link>
    </div>
  );
}

export default Checkout;
