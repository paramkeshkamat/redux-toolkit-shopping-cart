import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axios/axios";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  return (
    <div className="Login">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p>
          Don't have an account?{" "}
          <span onClick={() => history.push("/signup")}>Regiter here</span>
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
