import Image from './image'
import React, { useState, useEffect,useMemo } from "react";

function ImageGrid({images}) {
  const baseUrl = `${window.origin}/storage`;

  const preloadedImages = useMemo(() => {
    return images.data.map((img) => ({
      original: img.compressed_image,
      url: `${baseUrl}/${img.compressed_image}`,
    }));
  }, [images.data]);

  return (
    <div className="image-grid">
      {preloadedImages.map((img, index) => (
          <Image url={img.url} key={index} index={index}/>
      ))}
    </div>
  )
}

export default React.memo(ImageGrid)
