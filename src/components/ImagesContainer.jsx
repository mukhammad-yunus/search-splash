import React from "react";
import Masonry from "react-masonry-css";
import Image from "./helper/ImageContainer";

import sample from '../assets/sample.jpg'
import sample2 from '../assets/sample2.jpg'

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1
};


const ImageContainer = () => {
  const newArr = new Array(20).fill("0")
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-6"
    >
      {newArr.map((arr, index)=>{
        const num = Math.floor(Math.random() * 2) + 1;
        return num === 2? <Image key={index} details={sample2}/>:<Image key={index} details={sample}/> 
      })}
    </Masonry>
  );
};

export default ImageContainer;
