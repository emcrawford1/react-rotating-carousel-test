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


//Consider merging the user's styling preferences with embedded styling.  The embedded styling will contain certain defaults.
//However, these can be overwritten by the user.