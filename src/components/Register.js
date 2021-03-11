import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axios/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  return (
    <div className="Login">
      <form>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>
          Don't have an account?
          <span onClick={() => history.push("/signup")}> Regiter here</span>
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
