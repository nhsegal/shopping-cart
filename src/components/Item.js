import "./Item.css";
import React from "react";

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt={props.name} />
      <div className="name-and-price">
        <div className="item-name">{props.name}</div>
        <div className="item-price">{props.price}</div>
      </div>
      <div className='btns'>
        <button className="qty-btn">+</button>
        <input className="quantity" placeholder="1"/>
        <button className="qty-btn">-</button>
        <button className="buy-button" type="button">
        Add to cart
      </button>
      </div>

     
    </div>
  );
};

export default Item;
