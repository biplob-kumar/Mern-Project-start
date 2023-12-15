import React, { useContext, useEffect, useState } from 'react'
import logo from "../assets/logo.png";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import Modal from './Modal';
import { AuthContext } from '../contexts/AuthProvider';
import Profile from './Profile';
import UseCarts from '../hooks/UseCarts';
const Navbar = () => {
  const [sticky, setsticky,] = useState(false)
   const {user}= useContext(AuthContext)
  // console.log(user)
  const [cart,refetch]=UseCarts()
  // console.log(cart)

//  handle scrook dfunction 
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setsticky(true);
      } else {
        setsticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const navItems = <>

    <li> <Link to='/' > Home </Link> </li>
    <li>
      <details className='text-white' >
        <summary className='text-black' >Menu</summary>
        <ul className="p-2">
          <li>
           <Link to='/menu' > All </Link>
          </li>
          <li><a>Sallad</a></li>
          <li><a>Pigga</a></li>
        </ul>
      </details>
    </li>
    <li>
      <details  className='text-white' >
        <summary className='text-black' >Services</summary>
        <ul className="p-2">
          <li><a>Online Order</a></li>
          <li><a>table</a></li>
          <li><a>Order traking</a></li>
        </ul>
      </details>
    </li>
    <li><a>Offers</a></li>
  </>
  return (
    <div className='max-w-screen-2xl container mx-auto  fixed top-0  left-0 right-0 transition-all duration-300 ease-in-out'>
      <div className={`navbar xl:px-24 ${setsticky ? "shadow-md bg-white transition-all duration-300 ease-in-out" : ""}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black font-medium  ">
            {navItems}

       

          </ul>
        </div>
        <div className="navbar-end">
          {/*  search btn  */}
        <button className="btn btn-ghost  btn-circle hidden lg:flex text-black font-medium">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
      {/*  cart items  */}
      
     <Link to='cart-page' >  
     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-5 justify-content-center mt-2 hidden lg:flex text-black font-medium ">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{cart.length|| 0}</span>
        </div>
      </div>
     </Link>

      {/*  login  btn  */}
          {
            user?  <Profile user={user} /> : <button onClick={()=>document.getElementById('my_modal_5').showModal()} 
            className="btn bg-green rounded-full px-6 text-white flexalign-items-center gap-2 border-none"> 
            <FaUser />
             Login</button>
          }

          <Modal/>
        </div>
      </div>
    </div>
  )
}

export default Navbar



