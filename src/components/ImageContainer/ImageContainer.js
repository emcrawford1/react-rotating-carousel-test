import React from "react";

export const ImageContainer = ({ item, index, cardFlag }) => {
  const img = (
    <img
      id={`image-${index}`}
      src={item.source}
      alt={item.title}
      style={item.style}
    />
  );

  return <div id={`image-${index}-container`}>{img}</div>;
};


// Todo:
// 1) Add cardFlag logic