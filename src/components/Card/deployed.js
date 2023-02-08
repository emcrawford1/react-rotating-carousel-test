import React from "react";
import {
  deployedContainerStyle,
  deployedLinkStyle,
  deployedImgStyle,
  deployedTitleStyle,
  hoverStyle,
} from "./styling";

export const DeployedContainer = ({
  deployedLink,
  deployedLogo,
  handleMouseEnter,
  handleMouseLeave,
  isHover,
}) => {
  if (deployedLink === "") {
    return (
      <div style={deployedContainerStyle}>
        <a
          style={deployedLinkStyle}
          href={deployedLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          <img
            style={
              isHover
                ? Object.assign({}, deployedImgStyle, hoverStyle)
                : deployedImgStyle
            }
            src={deployedLogo}
            alt="deployed logo"
          />
          <div style={deployedTitleStyle}>Deployed</div>
        </a>
      </div>
    );
  } else return <></>;
};
