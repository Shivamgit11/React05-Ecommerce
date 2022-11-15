import { useLocation } from "react-router-dom";

const ProductDetails = () => {
    // const params = useParams();
    const location = useLocation();
    const product = location.state;

    // console.log(params.productId)
    return (
        <section>
            <h1>This is product details Page</h1>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <img src={product.imageUrl} alt="something" />
        </section>
    )
}

export default ProductDetails;