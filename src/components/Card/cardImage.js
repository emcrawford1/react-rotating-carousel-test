import React from "react";
import {
  cardImageContainerStyle,
  cardImageLinkStyle,
  cardImageTitleStyle,
  cardImageImgStyle,
  hoverStyle,
} from "./styling";

export const CardImage = ({
  imgLink,
  imgPic,
  imgText,
  userStyleContainer,
  userStyleImage,
  handleMouseEnter,
  handleMouseLeave,
  isHover,
}) => {

  // Combine user specified styles with default styles
  Object.assign(cardImageImgStyle, userStyleImage);
  Object.assign(cardImageContainerStyle, userStyleContainer);
   
  return (
       <div style={cardImageContainerStyle}>
        <a
          style={cardImageLinkStyle}
          href={imgLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          <img
            style={
              isHover
                ? Object.assign({}, cardImageImgStyle, hoverStyle)
                : cardImageImgStyle
            }
            src={imgPic}
            alt={imgText}
          />
          <div style={cardImageTitleStyle}>{imgText}</div>
        </a>
      </div>
  )
};
