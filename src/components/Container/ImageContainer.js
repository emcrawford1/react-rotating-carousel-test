import React from "react";
import { Card } from "../Card";


export const ImageContainer = ({ project, index }) => {
  const img = (
    <img
      id={`image-${index + 1}`}
      src={project.pic}
      alt={project.name}
      style={{ tbd: "tbd" }}
    />
  );

  if(index === 0) {
    return <Card />
  }

  return <div id={`image-${index + 1}container`}>{img}</div>;
};
