import React, { useState, useEffect } from "react";

// Component for rendering a meme image with top and bottom text
const Meme = () => {
  // State for storing the URL of the meme image
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setallMemes] = useState([]);

  // Fetch Memes
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setallMemes(data.data.memes));
  }, []);

  // Function to get a random meme image from MemesData
  const getMemeImage = () => {
    // Generate a random index within the length of the memesArray
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  // change handling function for the inputs
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  // Render the component
  return (
    <main>
      {/* Form for entering top and bottom text */}
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 📷
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="Meme Image" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

// Export the Meme component
export default Meme;
