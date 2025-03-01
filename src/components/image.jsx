import React, { useState, useEffect } from "react";
function Image({url = ""}) {
  const [viewSelected, setViewSelected] = useState("90px");
  //60px 90px 120px
  return(
    <div className="image-item"
      style={{height: `${viewSelected}`}}>
      <img src={`storage/${url}`} />
    </div>
  )
}

export default Image;
