import React from "react";
import { ProjectInfo } from "./info.js";
import { useState } from "react";

//Consider just passing down these settings rather than setting them in styling.js
import { image1Right, imageSettings } from "./styling.js";

export const Card = ({
  src,
  title,
  description,
  githubLink,
  githubLogo,
  deployedLink = "",
  deployedLogo = "",
  images,
}) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  return (
    <div id="outer-card" class="card">
      <img
        id="front-image"
        src={src}
        style={Object.assign({}, image1Right, imageSettings)}
        alt="Front card"
      />
      <ProjectInfo
        title={title}
        description={description}
        images={images}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isHover={isHover}
      />
    </div>
  );
};
