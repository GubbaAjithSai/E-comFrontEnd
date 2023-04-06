import { useState } from "react";
import styled from "styled-components";
import CartAmountToggle from "./CartAmountToggle";
import { Button } from "../styles/Button";
import { useNavigate } from "react-router-dom";


const AddToCart = ({product}) =>{
  const {stock,id}=product;
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {        
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount <stock ? setAmount(amount + 1):setAmount(stock);
  };
  const data={
    product:product,
    amount:amount
  }
  const navigate=useNavigate();
  function addToCart(data,id){
    if(localStorage.getItem("cart")==null){
      localStorage.setItem("cart",JSON.stringify([]));
    }
    let old_data=JSON.parse(localStorage.getItem("cart"));
    let flag=false;
    for(let i=0;i<old_data.length;i++){
      if(old_data[i].id.product.name===data.product.name){
        flag=true;
      }
    }
    if(!flag){
    old_data.push({id:data});
    localStorage.setItem("cart",JSON.stringify(old_data))
    localStorage.setItem("quantity",old_data.length)
    }

  }
  return (
    
    <Wrapper>
      {/* add to cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
    
        <Button className="btn" onClick={() => {addToCart(data,id);navigate("/cart")}}>Add To Cart</Button>
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;