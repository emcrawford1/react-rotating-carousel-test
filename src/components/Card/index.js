import { getClasses } from "../../helpers/index.js";
import { GithubContainer } from "./github.js";
import { DeployedContainer } from "./deployed.js";

export const Card = ({src, imageClass, title, description, githubLink, githubLogo, deployedLink = '', deployedLogo = ''}) => {
  
  const imageClassNames = getClasses(imageClass);
  
  return (
  <div id='outer-card' class='card'>
    <img id='front-image' src={src} class={imageClassNames} alt='Front card'/>
    <div id='project-info' class='info'>
      <div class='project-title'>{title}</div>
      <div class='project-descr'>{description}</div>
      <div class='link-container'>
      <GithubContainer 
        githubLink={githubLink}
        githubLogo={githubLogo}
      />
      <DeployedContainer 
        deployedLink={deployedLink}
        deployedLogo={deployedLogo}
      />
      </div>

    </div>
  </div>
)}


