import React from 'react'
import { useLoaderData } from "react-router-dom";
import { useEffect,useState } from "react";
import ImageGrid from "../components/imageGrid"
function Home() {
  const images = useLoaderData();
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <ImageGrid images={images} />
    </div>
  )
}

export default Home;

