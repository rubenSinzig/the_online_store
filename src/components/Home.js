import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="wrapper-home">
      {/* MacBook */}
      <div className="home-products">
        <div className="home-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/home_macbook.png`}
            alt="Apple macBook"
          />
        </div>
        <div className="home-info">
          <h2>MacBook</h2>
          <h4>Which Mac is right for you?</h4>
          <Link className="home-link" to="/products">
            BUY
            <span>
              <FiArrowUpRight />
            </span>
          </Link>
        </div>
      </div>
      {/* product two */}

      {/* product three */}

      {/* product four */}

      {/* product five */}
    </div>
  );
};

export default Home;
