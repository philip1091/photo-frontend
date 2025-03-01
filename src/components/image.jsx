import React, { useState, useEffect } from "react";
function Image({url,size}) {
  const [viewSelected, setViewSelected] = useState("90px");

  useEffect(() => {
    if (size === "small") {
      setViewSelected("60px")
    }else if (size === "medium") {
      setViewSelected("90px")
    } else if (size === "large") {
      setViewSelected("120px")
    }
  }, [size])
  return(
    <div className="image-item"
      style={{height: `${viewSelected}`}}>
      <img src={`storage/${url}`} />
    </div>
  )
}

export default Image;
