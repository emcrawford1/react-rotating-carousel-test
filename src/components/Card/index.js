import { getClasses } from "../../helpers/index.js";


const GithubContainer = ({ githubLink, githubLogo }) => {
  return (
    <div class='github-container'>
    <a class='github-link' href={githubLink} target='_blank' rel='noopener noreferrer'>
      <img class='github-img' src={githubLogo} alt='github Logo'/>
      <div class='github-title'>GitHub</div>
    </a>
  </div>
  )
}

const DeployedContainer = ({deployedStatus, deployedLink, deployedLogo}) => {

  if(deployedStatus) {
    <div class='deployed-container'>
      <a class='deployed-link' href={deployedLink}>
        <img class='deployed-img' src={deployedLogo} alt='deployed logo'/>
        <div class='deployed-title'>Deployed</div>
      </a>
    </div>
  }

  else return <></>
}



export const Card = ({src, imageClass, title, description, githubLink, githubLogo, deployedStatus, deployedLink, deployedLogo}) => {
  
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
        deployedStatus={deployedStatus}
        deployedLink={deployedLink}
        deployedLogo={deployedLogo}
      />
      </div>

    </div>
  </div>

)}


