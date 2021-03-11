import { useHistory } from "react-router-dom";
import "../styles/Error.css";

const Error = () => {
  const history = useHistory();
  return (
    <div className="Error">
      <h1>404</h1>
      <p className="first">This page could not be found!</p>
      <p>
        Go back to&nbsp;
        <span
          className="home-redirect-button"
          onClick={() => history.push("/")}
        >
          home page
        </span>
        .
      </p>
    </div>
  );
};

export default Error;
