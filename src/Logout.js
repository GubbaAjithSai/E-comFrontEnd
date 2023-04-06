import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
const Logout = () => {
    const Wrapper = styled.section`
    .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem; 
      margin-top:20px;
    }
    h3 {
      font-size: 4.2rem;
      margin-top:20px;
    }
    button{
        margin-top:20px;
      background:rgb(98 84 243);
      border-radius:5px;
      padding:5px;
      color:#ffffff;
    }
  }
`;
    return (
       
      <Wrapper>
        <div className="container">
          <div>
            <h2>ThankYou!!!</h2>
            <h3>
              Visit Again 
            </h3>
            
            <NavLink to="/">
              <button>Go Back to Home</button>
            </NavLink>
          </div>
        </div>
      </Wrapper>
    )
  
  
    
}

export default Logout;