import emperorTamarin from "../imgs/emperor-tamarin.jpeg";
import "./Shop.css";
import Item from "./Item";

const Shop = () => {
  const merch = [
    { name: "Emperor Tamarin", price: "$3000", image: emperorTamarin },
  ];
  return (
    <div className="shop">
      <Item name = {merch[0].name} price={merch[0].price} image = {merch[0].image}></Item>
    </div>
  );
};
export default Shop;
