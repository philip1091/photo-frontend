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

<<<<<<< HEAD
export default Image;
=======
export default Image
>>>>>>> d4844c45b40ab3c840d59d32592ac7f9f3df6f44
