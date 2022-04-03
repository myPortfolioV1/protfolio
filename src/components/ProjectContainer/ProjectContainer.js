import React, {useState,useContext} from 'react'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import PersonIcon from '@material-ui/icons/Person'
import AccountTreeIcon from "@material-ui/icons/AccountTree"
import './ProjectContainer.css'
import { ThemeContext } from '../../contexts/theme'

const ProjectContainer = ({ project }) => {
    const [{ themeName }] = useContext(ThemeContext)
  const [more,setMore]=useState(false)
  
 
  const getmore=()=>{
     setMore(()=>!more)
  }

  const getThemeClass=(componenent)=>{
   
      if(componenent==="tasks")
      {
        if(themeName ==="light")
        {
          return "project_task_light"
        }
    
          return "project_task_dark"
      
      }
    if( componenent==="technologies")
    {
      if(themeName ==="light")
      {
        return "project__stack"
      }
  
        return "project__stack_dark"
    }
   return ""

  }

  const showMore=()=>(
    <>
     <h3 style = {{color : "	#FF4500"}}>tasks </h3>
         <ul className={getThemeClass("tasks")}>
      {project.tasks.map(task=><li className="project_task_item" style = {{position : "floatLeft"}}>{task}</li>)}
    </ul> 
    <p style={{paddingTop : 25 , fontWeight : "bold" , color : "#FF8C00"}}>Technologies</p>
    {project.stack && (
      <ul className={getThemeClass("technologies")}> 
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
    </>
  )
const getType=()=>{
 if(project.team.length === 1)
 return "solo project"
 else
 return "team project"
}

const getcontributers=()=>{
  if(project.team.length === 1)
  return "contributor"
  else
  return "contributors"
}

const button = ()=>{
  let butt
  if(!more)
  {
    butt = <button onClick={getmore} className="showmore" type="button" ><span>show more </span></button>
  }
  else{

    butt = <button onClick={getmore} className="showless" type="button" ><span>show less </span></button>
  }

  return butt

}
   
  return(
  <div className='project' > 
       <img style ={{width : 150 , height : 150 , borderRadius : 155}} alt="project" src ={project.image}/>

    <h3 style = {{color : "	#FF4500" , margin : "15px"}}>{project.name}</h3>
   <p>role : {project.position} </p> _________ <p>{getType()}</p>  {project.team.map(()=><PersonIcon/>)} <p>{project.team.length} {getcontributers()}</p><AccountTreeIcon/>
    <p className='project__description'>{project.description}</p>  
   
    {more ?showMore():""}
    {button()}
  </div>
)}

export default ProjectContainer
