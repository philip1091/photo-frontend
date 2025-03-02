import React, { useState, useEffect } from "react";
function Image({url,size}) {
  const [viewSelected, setViewSelected] = useState("90px");
  const [isLandscape, setIsLandscape] = useState(false);
  useEffect(() => {
    if (size === "small") {
      setViewSelected("60px")
    }else if (size === "medium") {
      setViewSelected("90px")
    } else if (size === "large") {
      setViewSelected("120px")
    }
    if (!url) return;

    const img = new window.Image();
    img.src = `storage/${url}`;

    img.onload = () => {
      setIsLandscape(img.width > img.height);
    };
  }, [size])
  return(
    <div className={`image-item ${isLandscape ? "landscape" : "portrait"}`}
      style={{height: `${viewSelected}`}}>
      <img src={`storage/${url}`} />
    </div>
  )
}

export default Image;
