import React from 'react';

export default function Body() {
  const [memeImage, setMemeImage] = React.useState(
    'http://i.imgflip.com/1bij.jpg'
  );

  function getMemeImage() {}
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} className="meme--image" />
    </main>
  );
}
