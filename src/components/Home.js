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
          <Link className="home-link" to="/the_online_store/products">
            BUY
            <span>
              <FiArrowUpRight />
            </span>
          </Link>
        </div>
      </div>

      {/* Watch */}
      <div className="home-products ">
        <div className="home-info home-right">
          <h2>Apple Watch</h2>
          <h4>Has more on it, than it costs.</h4>
          <Link className="home-link" to="/the_online_store/products">
            BUY
            <span>
              <FiArrowUpRight />
            </span>
          </Link>
        </div>

        <div className="home-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/home_watch.png`}
            alt="Apple Watch"
          />
        </div>
      </div>

      {/* iPad */}
      <div className="home-products">
        <div className="home-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/home_iPad.png`}
            alt="iPad"
          />
        </div>
        <div className="home-info">
          <h2>iPad</h2>
          <h4>The ultimate iPad experience.</h4>
          <Link className="home-link" to="/the_online_store/products">
            BUY
            <span>
              <FiArrowUpRight />
            </span>
          </Link>
        </div>
      </div>

      {/* iPhone */}
      <div className="home-products ">
        <div className="home-info home-right">
          <h2>iPhone</h2>
          <h4>This step is a leap.</h4>
          <Link className="home-link" to="/the_online_store/products">
            BUY
            <span>
              <FiArrowUpRight />
            </span>
          </Link>
        </div>

        <div className="home-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/home_iPhone.png`}
            alt="iPhone"
          />
        </div>
      </div>

      {/* comming soon */}
    </div>
  );
};

export default Home;
