import "./Item.css";
import React from "react";

const Item = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

 

  return (
    <div className="item">
      <img src={props.image} alt={props.name} />
      <div className="name-and-price">
        <div className="item-name">{props.name}</div>
        <div className="item-price">{formatter.format(props.price)}</div>
      </div>
      <div className="btns">
        Quantity:       
       
        <input
          className="quantity"
          type = 'number'
          defaultValue={1}
          data-name={`${props.name} quantity`}
          min={1}
          max={99}
        />   
        <button
          className="buy-button"
          type="button"
          data-name={props.name}
          data-price={props.price}
          onClick={props.addItemToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
