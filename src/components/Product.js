import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cart";

const Product = ({ id, image, title, price }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="product">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <h3>${price}</h3>
      </div>
      <div className="buttons">
        <button onClick={() => history.push(`/products/${id}`)}>
          Product details
        </button>
        <button
          onClick={() => dispatch(addToCart({ id, image, title, price }))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
