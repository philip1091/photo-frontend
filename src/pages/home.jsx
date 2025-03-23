import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ImageGrid from "../components/imageGrid";
import { useOutletContext } from "react-router-dom";

function Home(props) {
  const images = useLoaderData();
  // const { size } = useOutletContext();
  const { setscrollY } = useOutletContext();
  useEffect(() => {
    console.log("RENDERED HOME");

    const handleScroll = () => {
      setscrollY(window.scrollY)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full mx-auto px-[15px] mb-[15px] mt-[95px]">
      <ImageGrid images={images} />
    </div>
  )
}

export default Home;

