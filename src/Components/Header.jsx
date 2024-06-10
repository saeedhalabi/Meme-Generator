import React from "react";
import MemeImage from "../images/troll-face.png";
const Header = () => {
  return (
    <div className="header--content">
      <img src={MemeImage} alt="Famous Meme Icon" />
      <h1>Meme Generator</h1>
    </div>
  );
};

export default Header;
