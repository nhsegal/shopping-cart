
import "./Shop.css";
import Item from "./Item";

const Shop = (props) => {
  const merch = props.merch;
 
  return (<>
  <h1>Welcome to the Shop!</h1>
  <div className="deck">
   {merch.map((entry) => (

    <Item 
    name = {entry.name}
    price = {entry.price}
    image = {entry.image}
    key = {entry.name}
    addItemToCart = {props.addItemToCart}
    /> 
    ))}
  </div>
  </>
  );
};
export default Shop;
