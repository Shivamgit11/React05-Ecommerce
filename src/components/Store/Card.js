import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
const Card = (props) => {
  const crtStore = useContext(CartContext);

  const addItemToCart = () => {
    const item = {
      title: props.title,
      imageUrl: props.imageUrl,
      id: props.id,
      price: props.price,
      quantity: 1,
    };

    crtStore.addItem(item);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <h3 className="text-center">{props.title}</h3>
      <Link to= {{ pathname: "/product-details", state: props}}>
          
            <img src={`${props.imageUrl}`} className="card-img-top" alt="..." />
          
        </Link>
      
      <div className="card-body">
        <div className="d-flex justify-content-around">
          <p>
            <span className="fs-4">
              ₹
              <span id="item-price" className="fs-4">
                {props.price}
              </span>
            </span>
          </p>
          <button className="btn btn-primary p-3" type="button" onClick={addItemToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
