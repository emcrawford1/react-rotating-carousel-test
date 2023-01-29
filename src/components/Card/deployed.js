import {deployedContainerClass, deployedLinkClass, deployedImgClass, deplolyedTitleClass} from './styling'

export const DeployedContainer = ({deployedStatus, deployedLink, deployedLogo}) => {
  if(deployedStatus) {
    return(
      <div class={deployedContainerClass}>
      <a class={deployedLinkClass} href={deployedLink}>
        <img class={deployedImgClass} src={deployedLogo} alt='deployed logo'/>
        <div class={deplolyedTitleClass}>Deployed</div>
      </a>
    </div>
    )
  }
  else return <></>
}
