import React, { useState, useEffect, useMemo, useRef, useLayoutEffect } from "react";
import LazyLoad from 'react-lazyload';
import { useOutletContext } from "react-router-dom";
import { gsap } from "gsap";

const Image = React.memo(({ url, index }) => {
  const { size } = useOutletContext();
  const [isLandscape, setIsLandscape] = useState(false);
  const imageRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!url) return;
    const img = new window.Image();
    img.src = `${url}`;

    img.onload = () => {
      setIsLandscape(img.width > img.height);
    };
  }, []);


  useEffect(() => {
    if (isLoaded) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0},
        { opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [isLoaded]);

  return(
    <div ref={imageRef} className={`image-item ${isLandscape ? "landscape" : "portrait"}`}
        style={{height:`${size}`, opacity: 0}}>
        <img onLoad={() => setIsLoaded(true)} src={`${url}`} loading="lazy" decoding="async" />
    </div>
  )
})

export default Image;
