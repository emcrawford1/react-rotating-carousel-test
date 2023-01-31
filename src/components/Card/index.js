import { getClasses } from "../../helpers/index.js";
import { ProjectInfo } from "./info.js";
import { GithubContainer } from "./github.js";
import { DeployedContainer } from "./deployed.js";
import { useState } from "react";

export const Card = ({
  src,
  imageClass,
  title,
  description,
  githubLink,
  githubLogo,
  deployedLink = "",
  deployedLogo = "",
}) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => setIsHover(true);
  const handleMouseExit = () => setIsHover(false);

  const imageClassNames = getClasses(imageClass);

  return (
    <div id="outer-card" class="card">
      <img
        id="front-image"
        src={src}
        class={imageClassNames}
        alt="Front card"
      />
      <ProjectInfo
        title={title}
        description={description}
        githubContainer={
          <GithubContainer githubLink={githubLink} githubLogo={githubLogo} />
        }
        deployedContainer={
          <DeployedContainer
            deployedLink={deployedLink}
            deployedLogo={deployedLogo}
          />
        }
      />
    </div>
  );
};
