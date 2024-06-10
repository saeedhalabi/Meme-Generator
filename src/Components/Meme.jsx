import React from "react";

const Meme = () => {
  return (
    <main>
      <div className="form">
        <input type="text" className="div--input" placeholder="Top Text" />
        <input type="text" className="div--input" placeholder="Bottom Text" />
        <button className="div--button">Get a new meme image 🖼</button>
      </div>
    </main>
  );
};

export default Meme;
