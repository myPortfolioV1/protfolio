import React, {useState,useContext,useEffect} from 'react'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import PersonIcon from '@material-ui/icons/Person'
import AccountTreeIcon from "@material-ui/icons/AccountTree"
import './MobileProjectList.css'
import { ThemeContext } from '../../contexts/theme'
import { PropaneSharp } from '@mui/icons-material'

const ProjectItemList = ({ project,getselected,id,selectedID}) => {
    const [{ themeName }] = useContext(ThemeContext)
  const [more,setMore]=useState(false)
 

 const teamword =()=>project===1?"contributer":"contributors"

const checkSelected=()=>{
  if(selectedID===id)
  {
    return "selectedMobileProject"
  }

  return "projectMobile"
}


   
  return(
  <div className={checkSelected()} onClick={()=>getselected(id)}> 
  <div className="MobileprojectHeader">
    <img src={project.image}/>
    <p>{project.name}</p>
  </div>
  
    {/* <div className="MobileprojectInfo" >
      <h4>{project.team.length>1?"team project":"solo project"}</h4>
      <p> {project.team.length} {teamword()}</p>

      <h4>technologies</h4>
      <div className="MobiletechnologiesLogoListContainer">{project.tecklogo.map((logo,i)=>(<div className="logoContainer" key={i}><img className="logoItem" src={logo} /></div>))}</div>
       
    </div> */}

  </div>
)}

export default ProjectItemList
