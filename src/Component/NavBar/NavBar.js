import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar({ cart, sum, remove, add, quantity}) {
  const [cartVisible, setCartVisible] = useState(false);
  const [login , Setlogin] = useState(false);
  const [username , setUsername] = useState("");
  const [password , setpassword ] = useState("");
  const [img , setimg] = useState("default.png");

  const handleSubmit = (e) => {
    let userFound = false; // A flag to track if the user is found
  e.preventDefault()
    userData.forEach(element => {
      if (username === element.name && password === element.password) {
        setimg(element.img);
        userFound = true; // Set the flag to true when the user is found
        Setlogin(false)
      }
      console.log(element)
    });
  
    if (!userFound) {
      alert("User not found"); // Show the alert if the user is not found
    }
  }
  
  const userData = [
    {
      name: "Anirudh",
      img: "Anirudh.jpg",
      password: "Password"
    },
    {
      name: "Madhav",
      img: "Anirudh.jpg",
      password: "Password"
    }
  ];
  
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
      <div className='flex gap-5'>
      <button onClick={()=>Setlogin(!login)}>Sign in</button> 
      {login && <div className='fixed top-20 rounded-xl text-black bg-slate-400 p-5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className='flex flex-col m-4'>
            <label>UserId</label>
            <input placeholder='userid : Anirudh' className='px-3 py-2 rounded-lg outline-none m-2' onChange={(e)=>setUsername(e.target.value)}></input>
          </div>
          <div className='flex flex-col m-5'>
            <label>password</label>
            <input placeholder='password : Password' type='password' className='px-3 py-2 rounded-lg outline-none m-2' onChange={(e)=>setpassword(e.target.value)}></input>
          </div>
          <button type='submit' className='bg-black text-white px-2 py-1 rounded-lg'>login</button>
        </form>
        </div>}
      <img src={require(`../Asset/${img}`)} title={username} className='w-10 h-10 rounded-full' alt='profile-img'></img>
      </div>
    </div>
  );
}

export default NavBar;
