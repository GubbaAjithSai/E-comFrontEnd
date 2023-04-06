import React from 'react'
import styled from 'styled-components'
import Card from '../card';
import Data from '../data';
const Exclusive = () => {
  const Wrapper=styled.section`
  .box{
    display:flex;
  }
  .conatainerr{
    background:#f6f8fa;
    padding:15px;
  }

  `;
  return (
    <Wrapper>
    <div className='conatainerr'>
      <h3>Our Exclusives</h3>
      <div className="box">
        {Data.map((data)=>{
          if(data.exclusive){
          return (
            <Card url={data.thumbnail}  name={data.name} price={data.price} alt={data.alt} id={data.id}/>
          )}
        })}
    </div>
    </div>
    </Wrapper>
  )
}

export default Exclusive