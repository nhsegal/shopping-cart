import React from "react";
import "./Cart.css";
import uniqid from "uniqid";
import { Link } from "react-router-dom";

const Cart = (props) => {
  console.log(props.cartVisible)
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let total = 0;

  if (props.cart.length > 0) {
    total = props.cart.reduce(
      (runningTotal, a) => a.price * a.quantity + runningTotal,
      0
    );
  }


  return (
    <div className={`cart ${props.cartVisible ? "cart-visible" : ""}`}>
      <div className="title">Shopping Cart:</div>

      {props.cart.map((itm) => (
        <div className="itm" key={itm.id} >
          <button className="remove-btn" onClick={props.removeItem} data-name={itm.name}>✕</button>
          <div className="qty">{itm.quantity}</div>
          <div> {itm.name}</div>
          <div className="subtotal" id={uniqid()}>
            {" "}
            {formatter.format(itm.price * itm.quantity)}
          </div>
        </div>
      ))}

      <div className="total">
        <div className="title"> Total: </div>{" "}
        <div className="total-amt" id="total-amt">
          {formatter.format(total)}
        </div>
      </div>
      <Link to="/checkout" aria-label="Checkout">
      <button className="checkout-btn" >Checkout</button>
      </Link>
    
    </div>
  );
};
export default Cart;
