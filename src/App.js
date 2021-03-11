import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Error from "./components/Error";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
