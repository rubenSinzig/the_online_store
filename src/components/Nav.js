import react from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

const Nav = () => {
  return (
    <Router>
      <div className="wrapper-nav">
        <Route>
          <div className="nav-home">Home</div>
        </Route>
        <Route>
          <div className="nav-products">Products</div>
        </Route>
        <Route>
          <div className="nav-about">About</div>
        </Route>
      </div>
    </Router>
  );
};

export default Nav;
