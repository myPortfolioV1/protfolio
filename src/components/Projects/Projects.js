import { useState , useEffect } from 'react'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import ProjectItemList from '../projectItemList/ProjectItemList'
import ProjectItemView from "../ProjectItemView/projectItemView"
import MobileProjectItemList from "../mobilePojectSectiom/MobileProjectList"
import './Projects.css'
import AOS from 'aos'
import "aos/dist/aos.css";
import { Height } from '@material-ui/icons'
import { WindowOutlined } from '@mui/icons-material'
const Projects = () => {
  if (!projects.length) return null

  let [selectedProjectItem,setProjectItem]=useState(0);
  let [ProjectList,setProjectList]=useState(projects);
  let [isMoblle,setMobile]=useState(false)
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    checkMobile();
  })


  const getItemsSelected=(id)=>{
    setProjectItem(()=>id)
  }



  const checkMobile =()=>{
     if(window.innerWidth<1000)
     {
       setMobile(()=>true)
     }
     else if(window.innerWidth>1000)
     {
        setMobile(()=>false)
     }

  }

  window.addEventListener('resize', checkMobile)




 const descktopContent=()=>{
return ( 
<div className="projects_List_Container">
  <div className="project_item_Container">
  <ProjectItemView project={projects[selectedProjectItem]} selected={selectedProjectItem}/>
  </div>

  <div className="projects_List">
   {projects.map((element,i)=><ProjectItemList key={i} id={i} getselected={getItemsSelected} selectedID={selectedProjectItem} project={element}/>)}
  </div>

</div>)
 }




const mobileContent=()=>{
  return (
     
     <div className="mobileContiner">
          <div className="mobileProjectItemContainer"></div>
          <div className="mobileProjectsListContainer">  
          {projects.map((element,i)=><MobileProjectItemList key={i} id={i} getselected={getItemsSelected} selectedID={selectedProjectItem} project={element}/>)}
        </div>
     </div>

  )
}



  return (
    <section id='NEFFEX ' className='sectionProjects' data-aos="fade-down">
       <h2 className='section__title'>Projects</h2>
                {!isMoblle?descktopContent():mobileContent()}
    </section>
  )
}

export default Projects
