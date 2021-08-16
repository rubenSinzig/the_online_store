import React, { useEffect, useState, useContext } from "react";
import ProductItem from "./ProductItem";
import { StoreContext } from "../context";

const ProductList = () => {
  const store = useContext(StoreContext);
  const [totalBill, setTotalBill] = useState(0);
  const [cart, setCart] = useState([]);
  const items = store.data.map((item, i) => (
    <ProductItem
      key={i}
      info={item}
      addToCart={store.addToCart}
      setCart={setCart}
    />
  ));

  useEffect(() => {
    setTotalBill(store.bill(cart));
  }, [cart]);

  return (
    <React.Fragment>
      <div className="cart">
        <p>Total Bill</p>
        <h6>{totalBill}€</h6>
      </div>
      <ul>{items}</ul>
    </React.Fragment>
  );
};
export default ProductList;
