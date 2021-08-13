import React from "react";

const Home = () => {
  return (
    <div className="wrapper-home">
      <div className="home-products product-macbook">
        <div className="home-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/home_macbook.png`}
            alt="Apple macBook"
          />
        </div>
        <div className="home-info macbook-info"></div>
      </div>
    </div>
  );
};

export default Home;
