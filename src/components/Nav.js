import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { FiShoppingCart } from "react-icons/fi"; 
import { CgMenu,CgClose } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate=useNavigate();
  let flag=localStorage.getItem("auth");
  let quantity=localStorage.getItem("quantity")!=null ? localStorage.getItem("quantity"):0;
  const clearCookie=async()=>{
    try {
        const res=await fetch("https://e-combackend-3gqu.onrender.com/logout",{
            method:"GET",
            headers:{
              "Content-Type":"application/json"
            }
        })
        console.log(res)
        localStorage.removeItem("auth");
        window.alert("LoggedOut successfully")
        navigate("/");
        console.log(res)
    } catch (error) {
        console.log(error);
    }
   }
  const [menuIcons,setMenuIcons]=React.useState();
    const Nav = styled.nav`
    .navbar-lists {
        display: flex;
        gap: 4.8rem;
        align-items: center;
      .navbar-link{
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: rcase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }
    .close-outline {
      display: none;
    }
    .cart-trolley--link {
        margin-right:50px;
      position: relative;
      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }
      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: #FAFBD4;
      }
    }
    .user-login--name {
      text-transform: capitalize;
    }
    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: black;
        .mobile-nav-icon {
          font-size: 4.2rem;
          color:black;
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: black;
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }
      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;
        .navbar-link {
          color:black;
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;
        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }
        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }
      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

    return (
    <Nav>
        <div className={menuIcons ? "navbar active" : "navbar"}>
            <ul className='navbar-lists'>
                <li>
                    <NavLink to="/" className="navbar-link home-link" onClick={()=>setMenuIcons(false)}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="navbar-link" onClick={()=>setMenuIcons(false)}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="navbar-link" onClick={()=>setMenuIcons(false)}>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="navbar-link" onClick={()=>setMenuIcons(false)}>Contact</NavLink>
                </li>
                {flag==null && 
                <li>
                    <NavLink to="/login" className="navbar-link" onClick={()=>setMenuIcons(false)}>Login</NavLink>
                </li>}
                {flag==="true" && 
                <li>
                    <NavLink to="/logout" className="navbar-link" onClick={()=>{setMenuIcons(false);clearCookie();}}>Logout</NavLink>
                </li>}
                {flag==null && 
                <li>
                    <NavLink to="/signup" className="navbar-link" onClick={()=>setMenuIcons(false)}>SignUp</NavLink>
                </li>}
                <li>
                    <NavLink to="/cart" className="navbar-link cart-trolley--link">
                    <FiShoppingCart className="cart-trolley" />
                    <span className="cart-total--item">{quantity}</span>
                    </NavLink>
                </li>
            </ul>
             <div className='mobile-navbar-btn'>
                <CgMenu name='menu-outline' className='mobile-nav-icon' onClick={()=>setMenuIcons(true)}/>
                <CgClose name='close-outline' className='mobile-nav-icon close-outline' onClick={()=>setMenuIcons(false)}/>
             </div>
        </div>
    </Nav>
  );
};

export default Nav;