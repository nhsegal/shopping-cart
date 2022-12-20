import React from 'react';
import './Cart.css';

const Cart = (props) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  let total = 0;
  if (props.cart.length > 0){
    total =props.cart.reduce( 
      ((a,b)=>(a.price*a.quantity+b.price*b.quantity)), {price: 0, quantity: 0}
    )
  
  }
  
  
  return (
   <div className='cart'>
    <div className='title'>Shopping Cart:</div>
    
     {props.cart.map( (itm) => (
      <div className='itm'>
        <div className='qty'>{itm.quantity}</div>
        <div> {itm.name}</div>
        <div className='subtotal' key={itm.name} > {formatter.format(itm.price*itm.quantity)}</div>
      </div>
    ) )}

    <div className='total'>
      <div className='title'> Total: </div> <div className='total-amt'>{
     formatter.format(total)
        }</div>
    </div>
   </div>
  )
}
export default Cart;