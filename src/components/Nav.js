import react from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import ProductList from "./ProductList";

const Nav = () => {
  return (
    <div className="wrapper-nav">
      <Router>
        <div className="nav-home">
          <Link to="/">Home</Link>
        </div>

        <div className="nav-products">
          <Link to="/products">Products</Link>
        </div>

        <div className="nav-about">
          <Link to="/about">About</Link>
        </div>

        <Switch>
          {/* <Route path="/" component={}/> */}
          <Route path="/products" component={ProductList} />

          {/* <Route path="/about" component={}/> */}
        </Switch>
      </Router>
    </div>
  );
};

export default Nav;
