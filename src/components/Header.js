import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const Header = () => {
  return (
    // main wrapper for header
    <div className="wrapper-header">
      {/* iPhone image */}
      <img
        className="header-img"
        src={`${process.env.PUBLIC_URL}/images/header_iPhone.png`}
        alt="blue iPhone"
      />

      {/* wrapper for iPhone text */}
      <div className="header-text">
        {/* iPhone text */}
        <h2>iPhone</h2>
        <h4>Almost too fast to be true</h4>

        {/* links to product iPhone */}
        <Router>
          <div className="header-product-link">
            <Link to="/#">
              <h6>
                More Info
                <span>
                  <FiArrowUpRight />
                </span>
              </h6>
            </Link>
            <Link to="/#">
              <h6>
                BUY
                <span>
                  <FiArrowUpRight />
                </span>
              </h6>
            </Link>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default Header;
