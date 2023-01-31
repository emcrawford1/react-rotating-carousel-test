import {
  githubContainerStyle,
  githubLinkStyle,
  githubImgStyle,
  githubTitleStyle,
} from "./styling";

export const GithubContainer = ({ githubLink, githubLogo }) => {
  return (
    <div style={githubContainerStyle}>
      <a
        style={githubLinkStyle}
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img style={githubImgStyle} src={githubLogo} alt="github Logo" />
        <div style={githubTitleStyle}>GitHub</div>
      </a>
    </div>
  );
};
