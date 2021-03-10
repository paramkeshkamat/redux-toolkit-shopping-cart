import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoBag } from "react-icons/io5";
import "../styles/Navbar.css";

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);

  return (
    <div className="Navbar">
      <div className="container">
        <Link to="/">Products</Link>
        <Link to="/cart" className="cart">
          <IoBag />
          {quantity !== 0 && <span>{quantity}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;