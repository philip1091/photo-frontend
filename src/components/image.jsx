import React, { useState, useEffect } from "react";
function Image({url = ""}) {
  const [viewSelected, setViewSelected] = useState("40px");

  return(
    <div className="image-item"
      style={{height: `${viewSelected}`}}>
      <img src={`storage/${url}`} />
    </div>
  )
}

export default Image
