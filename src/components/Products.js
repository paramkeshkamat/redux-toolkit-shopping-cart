import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cart";
import axios from "axios";
import "../styles/Products.css";
import Loading from "./Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="Products container">
      {products.map((product) => {
        const { id, title, price, image } = product;
        return (
          <div className="product" key={id}>
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
              <button onClick={() => dispatch(addToCart(product))}>
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
