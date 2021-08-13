import react from "react";
import {
  Redirect,
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
import ProductList from "./ProductList";
import Home from "./Home";
import About from "./About";

const Nav = () => {
  return (
    <Router>
      <div className="wrapper-nav">
        <Link className="nav-link nav-home" to="/the_online_store">
          Home
        </Link>

        <Link className="nav-link nav-products" to="/the_online_store/products">
          Products
        </Link>

        <Link className="nav-link nav-about" to="/the_online_store/about">
          About
        </Link>
      </div>
      <Switch>
        <Route exact path="/the_online_store" component={Home} />
        <Route
          exact
          path="/the_online_store/products"
          component={ProductList}
        />
        <Route exact path="/the_online_store/about" component={About} />

        {/* Redirect all 404's to home */}
        <Redirect to="/the_online_store" />
      </Switch>
    </Router>
  );
};

export default Nav;
