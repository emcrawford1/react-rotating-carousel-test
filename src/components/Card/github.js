import {githubContainerClass, githubLinkClass, githubImgClass, githubTitleClass} from './styling'

export const GithubContainer = ({ githubLink, githubLogo }) => {
  return (
    <div class={githubContainerClass}>
    <a class={githubLinkClass} href={githubLink} target='_blank' rel='noopener noreferrer'>
      <img class={githubImgClass} src={githubLogo} alt='github Logo'/>
      <div class={githubTitleClass}>GitHub</div>
    </a>
  </div>
  )
}