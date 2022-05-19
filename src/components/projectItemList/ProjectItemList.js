import React, {useState,useContext,useEffect} from 'react'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import PersonIcon from '@material-ui/icons/Person'
import AccountTreeIcon from "@material-ui/icons/AccountTree"
import './projectItem.css'
import { ThemeContext } from '../../contexts/theme'
import { PropaneSharp } from '@mui/icons-material'

const ProjectItemList = ({ project,getselected,id,selectedID}) => {
    const [{ themeName }] = useContext(ThemeContext)
  const [more,setMore]=useState(false)
 

 const teamword =()=>project===1?"contributer":"contributors"

const checkSelected=()=>{
  if(selectedID===id)
  {
    return "selectedProject"
  }

  return "project"
}


const getRole =()=>{
 return (<>      <h4>role</h4>
 <div><p>{project.position}</p></div></>)
}
   
  return(
  <div className={checkSelected()} onClick={()=>getselected(id)}> 
  <div className="projectHeader">
    <img src={project.image}/>
    <h4>{project.name}</h4>
  </div>
  
    <div className="projectInfo" >
      <h4>{project.team.length>1?"team project":"solo project"}</h4>
       <div className="projectContributersIcons"> {project.team.map((element, i)=><PersonIcon fontSize ={"small"} key={i}/>)}</div>
      <p> {project.team.length} {teamword()}</p>

      <h4>technologies</h4>
      <div className="technologiesLogoListContainer">{project.tecklogo.map((logo,i)=>(<div className="logoContainer" key={i}><img className="logoItem" src={logo} /></div>))}</div>
       
    </div>

  </div>
)}

export default ProjectItemList
