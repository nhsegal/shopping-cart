import "./Item.css";
import React from "react";

const Item = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  const incrementItem = (ev) => {
    const quant = document.querySelector(
      `[data-name = "${ev.target.getAttribute("data-name")} quantity"]`
    );

    if (quant.value < 99) {
      quant.setAttribute("value", parseInt(quant.value) + 1);
      quant.value = parseInt(quant.value) + 1;
    }
  };

  const decrementItem = (ev) => {
    const quant = document.querySelector(
      `[data-name = "${ev.target.getAttribute("data-name")} quantity"]`
    );
    if (quant.value > 1) {
      quant.setAttribute("value", parseInt(quant.value) - 1);
      quant.value = parseInt(quant.value) - 1;
    }
  };

  return (
    <div className="item">
      <img src={props.image} alt={props.name} />
      <div className="name-and-price">
        <div className="item-name">{props.name}</div>
        <div className="item-price">{formatter.format(props.price)}</div>
      </div>
      <div className="btns">
        <button
          className="qty-btn"
          data-name={props.name}
          onClick={incrementItem}>
          +
        </button>
        <input
          className="quantity"
          defaultValue={1}
          data-name={`${props.name} quantity`}
          min={1}
          max={99}
        />
        <button
          className="qty-btn"
          data-name={props.name}
          onClick={decrementItem}>
          -
        </button>
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
