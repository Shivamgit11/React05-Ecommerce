import React from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

import Item from "./Item";

const CartItem = (props) => {
  const ctxStore = useContext(CartContext);

  const cartProduct = ctxStore.items.map((product) => {
    return (
      <div className="col col=12" key={product.id}>
        <Item title={product.title} id={product.id} imageUrl={product.imageUrl} price={product.price} quantity={product.quantity} />
      </div>
    );
  });

  return (
    <div className={`container  ${classes["cart-items"]} d-flex justify-content-space`}>
      <div className="row">{cartProduct}</div>
    </div>
  );
};

export default CartItem;
