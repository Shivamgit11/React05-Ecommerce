import { Link, useLocation } from "react-router-dom";
import classes from "./StoreProductDetail.module.css";

const ProductDetails = () => {
  // const params = useParams();
  const location = useLocation();
  const product = location.state;

  // console.log(params.productId)
  return (
    <section className={classes.sec1}>
      <h1>Details</h1>
      <h2>Name: {product.title}</h2>
      <p>Price: {product.price}</p>
      <img src={product.imageUrl} alt="something" />
      <div>
        Mastering the product demo is no easy task. It requires a proper
        understanding of the product you’re selling, the customer you’re talking
        to, her specific challenges and expectations, and the ability to build
        rapport.
      </div>
      <Link to="/store">
      <button>
        Go to shop
      </button>
      </Link>
    </section>
  );
};

export default ProductDetails;
