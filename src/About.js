import React from 'react'
import styled from 'styled-components'

const About = () => {
  return(
<Wrapper>
<div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1>Saraswathi Super Stores</h1>
            <p>
             Sarswathi super store is serving with quality from past 40 years earning trust of thousands of people from mahabubnagar.Choose Saraswathi super stores for goods with superior quality at reasonable prices.
            </p>
            <h3>Company Address :</h3>
            <p>Saraswathi super stores,</p>
            <p>Opp. Govt civil Hospital,</p>
            <p>Mahbubnagar, telangana - 509001.</p>
            
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="saraswathi super store"
                className="img-style"
              />
            </figure>
            
          </div>
          
        </div>
      </div>
</Wrapper>
  )
}

const Wrapper=styled.section `
 padding: 12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;
export default About