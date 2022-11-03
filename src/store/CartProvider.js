import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItem] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const removeItem = (id, price, quantity) => {
    setCartItem((prevItems) => {
      let index = cartItems.findIndex((cartItem) => {
        return cartItem.id === id;
      });

      prevItems.splice(index, 1);

      let updatedItem = [...prevItems];

      return updatedItem;
    });

    setCartTotal((prevTotal) => {
      return Number(prevTotal) - Number(Number(quantity) * Number(price)); // prettier-ignore
    });
  };

  const addItem = (item) => {
    setCartItem((prevItems) => {
      let index = cartItems.findIndex((cartItem) => {
        return cartItem.id === item.id;
      });

      if (index !== -1) {
        const foundItem = prevItems[index];

        let updatedItem = {
          ...foundItem,
          quantity: Number(foundItem.quantity) + 1,
        };

        // Need to make copy because cart increment copy
        const updatedItems = [...prevItems];
        updatedItems[index] = updatedItem;
        return updatedItems;
      } else {
        let addedItems = [...prevItems, item];

        return addedItems;
      }
    });

    setCartTotal((prevTotal) => {
      return Number(prevTotal) + Number(item.price);
    });
  };

  const store = {
    items: cartItems,
    amount: cartTotal,
    addItem: addItem,
    removeItem: removeItem,
  };

  return <CartContext.Provider value={store}>{props.children} </CartContext.Provider>;
};

export default CartProvider;
