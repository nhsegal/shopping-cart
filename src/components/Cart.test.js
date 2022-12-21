import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, queryByAttribute } from "@testing-library/react";
import Cart from "./Cart";
import "@testing-library/jest-dom";
const getById = queryByAttribute.bind(null, 'id');
describe("Cart component", () => {

  it("computes the sum total zero for empty cart", () => {
    const sampleCart = [
    ];
    const view = render(
      <BrowserRouter>
        <Cart cart={sampleCart} />
      </BrowserRouter>
    );
    const sumTotal = getById(view.container, 'total-amt');
    expect(sumTotal.textContent).toEqual('$0.00')
  });

  it("computes the sum total for cart with one item", () => {
    const sampleCart = [
      { name: "Emperor Tamarin", price: 3000, quantity: 1 },
   
    ];
    const view = render(
      <BrowserRouter>
        <Cart cart={sampleCart} />
      </BrowserRouter>
    );
    const sumTotal = getById(view.container, 'total-amt');
    expect(sumTotal.textContent).toEqual('$3,000.00')
  });

  it("computes the sum total for cart with multiple item", () => {
    const sampleCart = [
      { name: "Emperor Tamarin", price: 3000, quantity: 2 },
      { name: "Japanese Macaque", price: 4000, quantity: 1} 
    ];
    const view = render(
      <BrowserRouter>
        <Cart cart={sampleCart} />
      </BrowserRouter>
    );
    const sumTotal = getById(view.container, 'total-amt');
    expect(sumTotal.textContent).toEqual('$10,000.00')
  });
});
