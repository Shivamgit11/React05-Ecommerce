import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  amount: 0,
});

export default CartContext;
