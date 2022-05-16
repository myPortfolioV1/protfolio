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

  useEffect(()=>{
    console.log("hello form project Item",project)
  })


   
  return(
  <div className='project'  > 
  <div className="projectHeader">
    <img src={project.image}/>
    <h4>{project.name}</h4>
  </div>
    
  </div>
)}

export default ProjectItemList
