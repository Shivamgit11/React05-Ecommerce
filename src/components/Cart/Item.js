import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const Item = (props) => {
  const ctxStore = useContext(CartContext);

  const deleteItem = () => {
    ctxStore.removeItem(props.id, props.price, props.quantity);
  };

  return (
    <React.Fragment>
      <div className="card-title">
        {props.title}

        <img src={props.imageUrl} alt="..." width={100} height={100} className="card-img-top" />
      </div>

      <div className="card-title">
        <p>
          <span>
            ₹<span id="item-price">{props.price}</span>
          </span>
        </p>
      </div>
      <div className="card-title" id="cart-quantity">
        {props.quantity}
      </div>
      <div className="card-title">
        <button onClick={deleteItem} className="btn btn-primary" style={{ padding: "4px" }}>
          Remove
        </button>
      </div>
    </React.Fragment>
  );
};

export default Item;
