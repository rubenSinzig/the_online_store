import react from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Nav = () => {
  return (
    <Router>
      <div className="wrapper-nav">
        <div className="nav-home">
          <Link to="/">Home</Link>
        </div>

        <div className="nav-products">
          <Link to="/products">Products</Link>
        </div>

        <div className="nav-about">
          <Link to="/about">About</Link>
        </div>
      </div>
    </Router>
  );
};

export default Nav;
