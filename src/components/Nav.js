import react from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import ProductList from "./ProductList";
import Home from "./Home";
import About from "./About";

const Nav = () => {
  return (
    <Router>
      <div className="wrapper-nav">
        <Link className="nav-link nav-home" to="/">
          Home
        </Link>

        <Link className="nav-link nav-products" to="/products">
          Products
        </Link>

        <Link className="nav-link nav-about" to="/about">
          About
        </Link>
      </div>
      <Switch>
        <Route exact path="/the_online_store" component={Home} />
        <Route exact path="/products" component={ProductList} />

        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default Nav;
