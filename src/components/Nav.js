import react from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import ProductList from "./ProductList";
import Home from "./Home";
import About from "./About";

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
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={ProductList} />

          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
};

export default Nav;
