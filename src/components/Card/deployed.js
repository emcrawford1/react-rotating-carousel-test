import {deployedContainerClass, deployedLinkClass, deployedImgClass, deplolyedTitleClass} from './styling'

export const DeployedContainer = ({deployedLink, deployedLogo}) => {
  if(deployedLink === '') {
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
