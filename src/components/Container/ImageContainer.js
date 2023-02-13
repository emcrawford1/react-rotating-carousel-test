import React from "react";
import { Card } from "../Card";


export const ImageContainer = ({ imgArr, index, cardFlag }) => {
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


//Consider merging the user's styling preferences with embedded styling.  The embedded styling will contain certain defaults.
//However, these can be overwritten by the user.