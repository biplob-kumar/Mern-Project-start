import React from "react";
import logo from "../assets/logo.png";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark ">
      <footer className="footer xl:px-24 py-24 px-4 text-base-content  ">
        <aside>
          <img src= {logo} alt="" />
          <p className="my-3 md:w-40">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </aside>
        <nav>
          <header className="footer-title text-white">Useful links</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav>
          <header className="footer-title text-white">Main Menu</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Offers</a>
          <a className="link link-hover">Menus</a>
          <a className="link link-hover">Reservation</a>
        </nav>
        <nav>
          <header className="footer-title text-white">Contact Us</header>
          <a className="link link-hover">example@email.com</a>
          <a className="link link-hover">+64 958 248 966</a>
          <a className="link link-hover">Social media</a>
        </nav>
      </footer>
        <hr />
      <footer className="footer items-center xl:px-24 px-4 py-4 mt-2">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                  <Link>    
                   <FaFacebook className="stext-9xl" /> 
                   </Link>
                   <Link>    
                   <FaWhatsapp />
                   </Link>
                   <Link>    
                   <FaInstagram />
                   </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;