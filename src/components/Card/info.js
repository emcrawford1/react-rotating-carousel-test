import {
  info,
  projectInfo,
  projectTitle,
  projectDescr,
  linkContainer,
} from "./styling";

export const ProjectInfo = ({
  githubLink,
  gitHubDeployed,
  title,
  description,
}) => {
  return (
    <div style={Object.assign({}, info, projectInfo)}>
      <div style={projectTitle}>{title}</div>
      <div style={projectDescr}>{description}</div>
      <div style={linkContainer}>
        <>{githubLink}</>
        <>{gitHubDeployed}</>
      </div>
    </div>
  );
};
