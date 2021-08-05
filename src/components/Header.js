import React from "react";

const Header = () => {
  return (
    <div className="wrapper-header">
      <img
        src={`${process.env.PUBLIC_URL}/images/header_iPhone.png`}
        alt="blue iPhone"
      />
    </div>
  );
};

export default Header;
