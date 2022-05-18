import React, {useState,useContext,useEffect} from 'react'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import PersonIcon from '@material-ui/icons/Person'
import AccountTreeIcon from "@material-ui/icons/AccountTree"
import './projectItemView.css'
import { ThemeContext } from '../../contexts/theme'
import { PropaneSharp } from '@mui/icons-material'

const ProjectItemView = ({project}) => {
    const [{ themeName }] = useContext(ThemeContext)

   var [projectItem,setProjectItem]=useState({})
   
   useEffect(()=>{()=>setProjectItem(project)},[]);
  console.log(projectItem,project)
  return(
  <div  key={Math.random()} className="projectViewContainer"> 
       <div className="projectItemViewHeader">
            <div className="projectItemViewHeaderTite"> <p>{project.name}</p> </div>
            <div  className="projectItemViewHeadersection2">

            </div>
            <div className="projectItemViewHeaderTite"><img src={project.image}/></div>
       </div>
       <div className="projectItemViewBody">
           
       </div>


  </div>
)}

export default ProjectItemView
