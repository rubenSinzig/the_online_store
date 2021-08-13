import React from "react";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div className="wrapper-footer">
      <div>
        Copyrights<sup>© </sup>
        <span id="year">{year}</span> by Ruben Sinzig
      </div>
    </div>
  );
};
export default Footer;
