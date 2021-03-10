import { useDispatch } from "react-redux";
import { removeFromCart, addItemQuantity, subtractItemQuantity } from "../redux/reducers/cart";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { image, title, price, quantity } = props;

  return (
    <div className="cart-item">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-title">
        <h2>{title}</h2>
        <h2 className="product-price">${price}</h2>
        <button onClick={() => dispatch(removeFromCart(props))}>
          Remove from cart
        </button>
      </div>
      <div className="quantity">
        <button onClick={() => dispatch(subtractItemQuantity(props))}>
          <IoRemoveSharp />
        </button>
        <p>{quantity}</p>
        <button onClick={() => dispatch(addItemQuantity(props))}>
          <IoAddSharp />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
