import React from "react";
import MemesData from "../memesData";

const Meme = () => {
  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top Text" />
        <input type="text" className="form--input" placeholder="Bottom Text" />
        <button className="form--button">Get a new meme image 📷</button>
      </div>
    </main>
  );
};

export default Meme;
