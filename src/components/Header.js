import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "./Nav"
const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src="./images/logo.png" alt="Saraswathi Super Store"  height="60px"/>
        </NavLink>
        <Nav />
    </MainHeader>
  )
}
const MainHeader = styled.header` 
 height: 64px;
 background-color:${({theme})=>theme.colors.bg};
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;

.logo{
 height: 5rem;
}
@media (max-width:${({theme})=>theme.media.mobile}) { 
} 
`;

export default Header