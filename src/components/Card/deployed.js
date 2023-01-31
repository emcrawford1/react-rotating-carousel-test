import {
  deployedContainerStyle,
  deployedLinkStyle,
  deployedImgStyle,
  deplolyedTitleStyle,
} from "./styling";

export const DeployedContainer = ({ deployedLink, deployedLogo }) => {
  if (deployedLink === "") {
    return (
      <div style={deployedContainerStyle}>
        <a style={deployedLinkStyle} href={deployedLink}>
          <img
            style={deployedImgStyle}
            src={deployedLogo}
            alt="deployed logo"
          />
          <div style={deplolyedTitleStyle}>Deployed</div>
        </a>
      </div>
    );
  } else return <></>;
};
