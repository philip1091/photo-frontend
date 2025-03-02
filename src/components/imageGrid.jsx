import Image from './image'
import React, { useState, useEffect } from "react";
function ImageGrid({images,size}) {


  return (
    <div className="image-grid">
      {images.data.map((img, index) => (
        <Image url={img.image} key={index} size={size} />
      ))}
    </div>
  )
}

export default ImageGrid
