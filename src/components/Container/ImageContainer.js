import React from "react";
import { Card } from "../Card";


export const ImageContainer = ({ imgArr, index }) => {
  const img = (
    <img
      id={`image-${index + 1}`}
      src={imgArr.source}
      alt={imgArr.title}
      style={imgArr.style}
    />
  );

  return <div id={`image-${index + 1}container`}>{img}</div>;
};
