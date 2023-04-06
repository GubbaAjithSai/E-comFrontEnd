import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const footer = () => {
  return (
    <Wrapper>
    <footer>
      <div className="box">
        <div className="footer">
          <h3>FAQs</h3>
          <h3>Privacy Policy</h3>
          <h3>Pricing, Delivery, Return and Refund Policy</h3>
          <h3>Terms and Conditions</h3>
        </div>
        <div className="footer">
        <h3><NavLink to="/contact" className='link'>Contact Us</NavLink></h3>
        <h3><NavLink to="/about" className='link'>About Us</NavLink></h3>
        </div>
      </div>
      <hr />
      <div className="box">
        <p>Copyright © 2023 Saraswathi super stores. All Rights Reserved.</p>
      </div>
    </footer>
    </Wrapper>
  )
}
const Wrapper=styled.section`
    *{
      margin:0;
      padding:0;
    }
    footer{
      position:absolute;
      
      background-color: #aea1ea;
      h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    .link{
      color: ${({ theme }) => theme.colors.hr};
      &:hover{
        color:#000000;
        text-decoration: underline;
      }
    }
    
    p {
      color: ${({ theme }) => theme.colors.hr};
    }
    }
  .box{
    display:flex;
    width:100vw;
    p{
      margin:auto;
      color: ${({ theme }) => theme.colors.black};
    }
    .footer{
      margin:auto;
      padding:10px
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default footer