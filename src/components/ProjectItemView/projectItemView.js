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



           <div className="projectRightSideInfo">
              <div className="projectNatureThumb" >
                   <img src={project.victors} />
                   <p>{project.team.length>1?"team project":"solo project"}</p>
              </div>
              <div className="projectRoleBox">
                <img src={project.roleImage}/>
                <div className="projectRoleBoxText"><p>role :</p><p className="projectRoleBoxPosition">{project.position}</p></div>
              </div>
              <div className="linksBox">
                <a href={project.sourceCode}><div className="githubBox"><GitHubIcon/><p>github repository</p></div></a>
                   <div className="livePreviewBox"><LaunchIcon/><p>live preview</p></div>

              </div>
           </div>


           <div className="projectMainsection">
               <div className="projectDiscription">
                   <p className="projectDiscriptionTitle">what is {project.name}:</p>  
                   <p>{project.description}</p>
                </div>
                <div className="projectItemViewBodyTasksContainer">
           <p className="projectDiscriptionTitle">my tasks :</p>  
                <ul className="taskslistContainer">
                  {project.tasks.map((task,i)=><li className="taskItem" key={i}>{task}</li>)}
                </ul>
           </div>
           </div>
    
           <div className="projectLeftSideInfo">
           </div>
     
       </div>
       <div className="projectItemViewFooter">
          <div className="mainTecks">
            {project.tecklogo.map((teck,i)=><div key={i}><img src={teck}/></div>)}
          </div>
          <div className="otherTecks"></div>
       </div>

  </div>
)}

export default ProjectItemView
