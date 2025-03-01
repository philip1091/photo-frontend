import React from 'react'
import { useLoaderData } from "react-router-dom";
import { useEffect,useState } from "react";
import ImageGrid from "../components/imageGrid"
function Home() {
  const images = useLoaderData();
  return (
    <div className="w-full mx-auto px-[15px] my-[15px]">
      <ImageGrid images={images} />
    </div>
  )
}

export default Home;

