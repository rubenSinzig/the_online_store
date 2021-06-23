import React from "react";
import Data from "../data.json";

const Store = {
  data: Data,
  // cart: [],
  print: (str) => console.log(str),
  bill: function (cart) {
    return cart.reduce((acc, cur) => acc + cur.price, 0);
  },
  addToCart: (setCart, item) => setCart((prevState) => [...prevState, item]),
};

const StoreContext = React.createContext(Store);

export { Store, StoreContext };
