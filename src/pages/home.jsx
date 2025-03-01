import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ImageGrid from "../components/imageGrid";
import { useOutletContext } from "react-router-dom";

function Home() {
  const images = useLoaderData();
  const { size } = useOutletContext();
  return (
    <div className="w-full mx-auto px-[15px] my-[15px]">
      <ImageGrid images={images} size={size} />
    </div>
  )
}

export default Home;

