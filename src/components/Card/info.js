import React from "react";
import { CardImage } from "./cardImage";
import {
  info,
  projectInfo,
  projectTitle,
  projectDescr,
  linkContainer,
} from "./styling";

export const ProjectInfo = ({
  title,
  description,
  images,
  handleMouseEnter,
  handleMouseLeave,
  isHover,
}) => {
  return (
    <div style={Object.assign({}, info, projectInfo)}>
      <div style={projectTitle}>{title}</div>
      <div style={projectDescr}>{description}</div>
      <div style={linkContainer}>
      {images.map((image) => {
        return (
          <CardImage
          imgLink={image.imgLink}
          imgPic={image.imgPic}
          imgText={image.imgText}
          userStyleContainer={image.userStyleContainer}
          userStyleImage={image.userStyleImage}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          isHover={isHover}
          />
          );
        })}
      </div>
    </div>
  );
};
