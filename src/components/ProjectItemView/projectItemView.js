import React, {useState,useContext,useEffect} from 'react'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import PersonIcon from '@material-ui/icons/Person'
import AccountTreeIcon from "@material-ui/icons/AccountTree"
import './projectItemView.css'
import { ThemeContext } from '../../contexts/theme'
import { PropaneSharp } from '@mui/icons-material'

const ProjectItemView = ({ project,getselected,id,selectedID}) => {
    const [{ themeName }] = useContext(ThemeContext)

   
  return(
  <div className={checkSelected()} onClick={()=>getselected(id)}> 


  </div>
)}

export default ProjectItemView
