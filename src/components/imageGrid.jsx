import React from 'react'
import Image from './image'
function ImageGrid({images,imagesPerRow}) {

  const shuffleArray = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  const shuffledImages = shuffleArray(images.data);
  return (
    <div className="image-grid">
      {shuffledImages.map((img, index) => (
        <Image url={img.image} key={index} />
      ))}
    </div>
  )
}

export default ImageGrid
