import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

import './ProjectContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectContainer = ({ project }) => (
  <div className='project' > 
       <img style ={{width : 150 , height : 150 , borderRadius : 155}} alt="project" src ={project.image}/>

      <p>role : {project.position}</p> | <p>team of {project.team.length}</p>
      <FontAwesomeIcon icon={["fal", "coffee"]} size="6x"/>
    <h3 style = {{color : "	#FF4500"}}>{project.name}</h3>
    
    <p className='project__description'>{project.description}</p>   
    <p style={{paddingTop : 25 , fontWeight : "bold" , color : "#FF8C00"}}>Technologies</p>
    {project.stack && (
      <ul className='project__stack'> 
        {project.stack.map((item) => (
         <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
