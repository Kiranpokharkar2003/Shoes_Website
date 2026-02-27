import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/img.jpg';
import nav_dropdown from '../Assets/nav_dropdown.png';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const navigate = useNavigate();

  // Function to toggle dropdown visibility
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    navigate("/login");  // Redirect to login page after logout
  };

  // Check if user is logged in (i.e., if 'auth-token' is present in localStorage)
  const isLoggedIn = !!localStorage.getItem('auth-token');

  return (
    <div className='navbar'>
      <Link to='/' onClick={() => setMenu("shop")} className="nav-logo">
        <img src={logo} alt="logo" />
        <p>𝐒𝐡𝐨𝐞𝐒𝐭𝐨𝐫𝐞</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="dropdown" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}><Link to='/'>Home</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("shopping")}>
          <div className="menunav">
            <a href='#'><button className="menunavbtn">Shop  <FontAwesomeIcon icon={faCaretDown} /></button></a>
            <div className="menunav-content">
              <a href="#mens" onClick={() => setMenu("mens")}><Link to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</a>
              <a href="#womens" onClick={() => setMenu("womens")}><Link to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</a>
              <a href="#kids" onClick={() => setMenu("kids")}><Link to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</a>
            </div>
          </div>
          {menu === "shopping" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("aboutus")}><Link to='/AboutUs'>About Us</Link>{menu === "aboutus" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("contactform")}><Link to='/contactform'>Contact Us</Link>{menu === "contactform" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        {isLoggedIn 
          ? <button onClick={handleLogout}><FontAwesomeIcon icon={faUser} /> Logout</button>
          : <Link to='/login'><button><FontAwesomeIcon icon={faUser} /> Login</button></Link>
        }
        <Link to='/cart'><img className="cart" src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
