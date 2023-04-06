import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
const Card = (props) => {
    const Wrapper=styled.section`
    margin:10px auto;
    section{
        display:inline-block;
    }
    img{
        width:150px;
        height:150px;
        display: block;
        margin:10px auto ;
        border:2px solid black;
        border-radius:5px;
        &:hover{
            transform: scale(1.05);
        }
    }
    .box{
        display:flex;
    }
    .container{
        background:#f6f8fa;
        padding:5px;
        width:250px;
    }
    p{
        margin:auto;
    }
    
    .price{
        color:#8490ff;
    }
    `;
  return (
  <Wrapper>

    <div className="container">
        <NavLink to={`/SingleProduct/${props.id}`}>
            <img src={props.url}  alt={props.alt}/>
        </NavLink>
        
        <div className='box'>
            <p className='name'>{props.name}</p>
            <p className='price'>₹{props.price}only</p>
            
        </div> 
    </div>
    </Wrapper>
  )
}

export default Card