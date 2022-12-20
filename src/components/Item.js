import "./Item.css";
import React from "react";

const Item = (props) => {
  const incrementItem = () =>{

  }
  const decrementItem = () =>{

  }

  return (
    <div className="item">
      <img src={props.image} alt={props.name} />
      <div className="name-and-price">
        <div className="item-name">{props.name}</div>
        <div className="item-price">${props.price}</div>
      </div>
      <div className='btns'>
        <button className="qty-btn">+</button>
        <input className="quantity" defaultValue={1} id={props.name}/>
        <button className="qty-btn">-</button>
        <button className="buy-button" 
        type="button"
         data-name= {props.name} 
         data-price= {props.price} 
         onClick={props.addItemToCart}>
        Add to cart
      </button>
      </div>

     
    </div>
  );
};

export default Item;
