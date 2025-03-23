import React, { useState, useEffect, useMemo } from "react";
import LazyLoad from 'react-lazyload';
import { useOutletContext } from "react-router-dom";


const Image = React.memo(({ url }) => {
  const { size } = useOutletContext();
  const [isLandscape, setIsLandscape] = useState(false);
  useEffect(() => {
    if (!url) return;
    const img = new window.Image();
    img.src = `${url}`;

    img.onload = () => {
      setIsLandscape(img.width > img.height);
    };
  }, [size])
  return(
    <div height={size} className={`image-item ${isLandscape ? "landscape" : "portrait"}`}
        style={{height: `${size}`}}>
        <img src={`${url}`} loading="eager"/>
    </div>
  )
})

export default Image;
