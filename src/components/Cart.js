import { useSelector } from "react-redux";
import "../styles/Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, totalAmount, quantity } = useSelector((state) => state.cart);

  if (quantity === 0) {
    return <h2 className="no-items">No items in cart...</h2>;
  }

  return (
    <div className="Cart container">
      <h1>Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <h2 className="total">Total Amount: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
