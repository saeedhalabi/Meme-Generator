import React from "react";
import MemeImage from "../images/troll-face.png";
const Header = () => {
  return (
    <header className="header--content">
      <img src={MemeImage} alt="Famous Meme Icon" />
      <h1>Meme Generator</h1>
    </header>
  );
};

export default Header;
