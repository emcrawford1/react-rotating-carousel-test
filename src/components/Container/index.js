import React from "react";
import { Card } from "../Card";

export const InnerContainer = ({ projects, gitHubLogo, deployedLogo }) => {
  return (
    <Card
      src={projects.src}
      title={projects.title}
      description={projects.description}
      githubLink={projects.githubLink}
      deployedLink={projects.deployedLink}
      githubLogo={gitHubLogo}
      deployedLogo={deployedLogo}
    />
  );
};
