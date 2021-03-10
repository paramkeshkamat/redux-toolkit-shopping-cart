import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cart";
import axios from "axios";
import "../styles/SingleProduct.css";
import Loading from "./Loading";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProduct();
  }, [id]);

  const { title, price, description, category, image } = product;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="SingleProduct container">
      <div className="left-div">
        <img src={image} alt={title} />
      </div>
      <div className="right-div">
        <h2 className="title">{title}</h2>
        <h3 className="category">{category}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
