import React from "react";

export const ImageContainer = ({ project, index }) => {
  return (
  <div id={`image-${index + 1}container`}>
    <img 
    id={`image-${index+1}`}
    src={project.pic}
    alt={project.name}
    style={{'tbd': 'tbd'}}
    />
  </div>
  )
};
