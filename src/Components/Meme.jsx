import React, { useState } from "react";
import MemesData from "../memesData";

// Component for rendering a meme image with top and bottom text
const Meme = () => {
  // State for storing the URL of the meme image
  const [memeImage, setMemeImage] = useState("");

  // Function to get a random meme image from MemesData
  const getMemeImage = () => {
    // Retrieve the array of meme objects from MemesData
    const memesArray = MemesData.data.memes;
    // Generate a random index within the length of the memesArray
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    // Set the memeImage state to the URL of the randomly selected meme
    setMemeImage(memesArray[randomNumber].url);
  };

  // Render the component
  return (
    <main>
      {/* Form for entering top and bottom text */}
      <div className="form">
        <input type="text" className="form--input" placeholder="Top Text" />
        <input type="text" className="form--input" placeholder="Bottom Text" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 📷
        </button>
      </div>
      {/* Display the meme image if memeImage state is not empty */}
      {memeImage && (
        <img src={memeImage} alt="Meme Image" className="meme--image" />
      )}
    </main>
  );
};

// Export the Meme component
export default Meme;
