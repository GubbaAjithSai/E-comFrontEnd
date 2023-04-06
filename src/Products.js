import React from "react";
import styled from "styled-components";
import Card from "./card"
import Data from "./data"

const Products = () => {
  const [filtered,setFilter]=React.useState(Data)
  function handleChange(event){
      const searchData=Data.filter((currElem)=>{
        return currElem.name.toLowerCase().includes(event.target.value)
      })
      setFilter(searchData);   
  }
  return <Wrapper>
  <div className="heading"><h2>Our Products</h2></div>
    <div className="search">
      <form action="#">
        <input type="text" name="text" placeholder="What are you looking for?" onChange={handleChange} />
      </form>
    </div>
    <div className="prodLayout">
      {filtered.map((info)=>{
        return <Card id={info.id} url={info.thumbnail} alt={info.name} name={info.name} price={info.price} />
      })}
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  margin:10px auto;
  width:1200px;
  .heading{
    text-align:center;
  }
form{
  display:flex;
}
  input{
    width:1500px;
    text-align:center;
    margin:10px auto;
    border-radius:20%;
    color:black;
  }
  
 .prodLayout{
  border:2px solid black;
  border-radius:5px;
  display:flex;
  padding:10px;
  flex-wrap:wrap;
  
 }
`;
export default Products;