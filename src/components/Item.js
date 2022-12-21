import "./Item.css";
import React from "react";

const Item = (props) => {
  const incrementItem = (ev) =>{
    console.log(ev.target.getAttribute('data-name'))
    const quant = document.getElementById(`${ev.target.getAttribute('data-name')}`);
    if (quant.value < 99){
      quant.setAttribute('value', parseInt(quant.value)+1)
      quant.value = parseInt(quant.value)+1;;
    }
    console.log(quant)
  }
  const decrementItem = (ev) =>{
    const quant = document.getElementById(`${ev.target.getAttribute('data-name')}`);
    if (quant.value > 1){
      quant.setAttribute('value', parseInt(quant.value)-1)
      quant.value = parseInt(quant.value)-1;
    }
    console.log(quant.value)

  }

  return (
    <div className="item">
      <img src={props.image} alt={props.name} />
      <div className="name-and-price">
        <div className="item-name">{props.name}</div>
        <div className="item-price">${props.price}</div>
      </div>
      <div className='btns'>
        <button className="qty-btn" 
        data-name={props.name}
        onClick={incrementItem}
        >+</button>
        <input className="quantity" defaultValue={1} id={props.name} min = {1} max = {99}/>
        <button className="qty-btn" 
        data-name={props.name}
        onClick={decrementItem}
        >-</button>
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
