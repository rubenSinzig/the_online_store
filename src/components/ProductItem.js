import React from "react";

const ProductItem = ({ info, addToCart, setCart }) => {
  const { id, productName, icon, price, inventory } = info;

  return (
    <li key={id}>
      <div className="wrapper-product-item">
        {productName}
        <img src={`${process.env.PUBLIC_URL}${icon}`} alt={productName} />
        <h5>{price}€</h5>
        <h6>{inventory} items in stock</h6>
        <button
          disabled={inventory === 0}
          onClick={() => {
            addToCart(setCart, info);
          }}
        >
          {inventory > 0 ? "Add to cart" : "Sold out"}
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
