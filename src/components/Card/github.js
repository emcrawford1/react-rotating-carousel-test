import {
  githubContainerStyle,
  githubLinkStyle,
  githubImgStyle,
  githubTitleStyle,
  hoverStyle,
} from "./styling";

export const GithubContainer = ({
  githubLink,
  githubLogo,
  handleMouseEnter,
  handleMouseLeave,
  isHover,
}) => {
  return (
    <div style={githubContainerStyle}>
      <a
        style={githubLinkStyle}
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        <img
          style={
            isHover
              ? Object.assign({}, githubImgStyle, hoverStyle)
              : githubImgStyle
          }
          src={githubLogo}
          alt="github Logo"
        />
        <div style={githubTitleStyle}>GitHub</div>
      </a>
    </div>
  );
};
