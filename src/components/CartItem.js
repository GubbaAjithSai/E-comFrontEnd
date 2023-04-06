import React from "react";
import { FaTrash } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle"
import {  NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CartItem = ({ id, name, thumbnail, price,stock,amount}) => {
    const [quantity,setQuantity]=React.useState(amount)
    const navigate=useNavigate();
  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const setIncrease = () => {
    amount < stock ? setQuantity(quantity +1) : setQuantity(stock);
  };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
       
            <NavLink to={`/SingleProduct/${id}`}>
                <img src={thumbnail} alt={id} />
            </NavLink>
            
            <NavLink to={`/SingleProduct/${id}`}>
                <p>{name}</p>
            </NavLink>
        
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
         {price} 
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle 
        amount={quantity}
        setDecrease={() => setDecrease()}
        setIncrease={() => setIncrease()}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          {price * quantity}
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" onClick={() => {
            const old_data=JSON.parse(localStorage.getItem("cart"));
            const new_data=old_data.filter((currElem)=>currElem.id.product.name!==name);
            localStorage.setItem("cart",JSON.stringify(new_data));
            localStorage.setItem("quantity",new_data.length);
            navigate("/cart");
        }} />
      </div>
    </div>
  );
};
export default CartItem;