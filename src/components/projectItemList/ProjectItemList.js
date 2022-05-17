import React, {useState,useContext,useEffect} from 'react'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import PersonIcon from '@material-ui/icons/Person'
import AccountTreeIcon from "@material-ui/icons/AccountTree"
import './projectItem.css'
import { ThemeContext } from '../../contexts/theme'

const ProjectItemList = ({ project }) => {
    const [{ themeName }] = useContext(ThemeContext)
  const [more,setMore]=useState(false)
 
  console.log(project);

 const teamword =()=>project===1?"contributer":"contributors"

   
  return(
  <div className='project' > 
  <div className="projectHeader">
    <img src={project.image}/>
    <h4>{project.name}</h4>
  </div>
  
    <div className="projectInfo" >
      <h4>team project</h4>
       <div className="projectContributersIcons"> {project.team.map((element, i)=><PersonIcon key={i}/>)}</div>
       {project.team.length} {teamword()} 
      <h4>role</h4>
      <div>{project.position}</div>
      <h4>technologies</h4>
      <div className="technologiesLogoListContainer">{project.tecklogo.map((logo,i)=>(<div className="logoContainer" key={i}><img className="logoItem" src={logo} /></div>))}</div>
       
    </div>

  </div>
)}

export default ProjectItemList
