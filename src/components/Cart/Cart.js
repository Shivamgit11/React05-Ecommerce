import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import Button from "../UI/button";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const ctxStore = useContext(CartContext);

  return (
    <Modal onClick={props.onClick}>
      <div className={`/*d-none*/ ${classes["cart-position"]}`} id="cart">
        <div className="card" style={{ width: "35rem", height: "auto" }}>
          <div className="fs-1 d-flex justify-content-center">
            Cart
            <Button className="fs-5 position-absolute end-0 btn btn-primary" onClick={props.onClick}>
              x
            </Button>
          </div>
          <div className="card-body" id="cart-body">
            <div className={`${classes["cart-header"]} d-flex justify-content-center`}>
              <div className="card-title">ITEM</div>
              <div className="card-title">PRICE</div>
              <div className="card-title">QUANTITY</div>
            </div>
            {/* Adding Product Here */}
            <CartItem />
            <div className={`${classes["cart-details"]}  d-flex justify-content-end`} id="cart-add">
              <div>Total :</div>

              <span>
                ₹<span id="cart-sub-total">{ctxStore.amount}</span>
              </span>
            </div>
            <div className={`${classes["cart-purchase"]}`}>
              <Button className="btn btn-primary">Purchase </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
