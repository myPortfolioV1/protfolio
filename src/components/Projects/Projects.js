import { useState , useEffect } from 'react'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import ProjectItemList from '../projectItemList/ProjectItemList'
import ProjectItemView from "../ProjectItemView/projectItemView"
import './Projects.css'
import AOS from 'aos'
import "aos/dist/aos.css";
import { Height } from '@material-ui/icons'
const Projects = () => {
  if (!projects.length) return null

  let [selectedProjectItem,setProjectItem]=useState(0);
  let [ProjectList,setProjectList]=useState(projects);
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })


  const getItemsSelected=(id)=>{
    setProjectItem(()=>id)
  }

  return (
    <section id='NEFFEX ' className='sectionProjects' data-aos="fade-down">
       <h2 className='section__title'>Projects</h2>
 
           

              {/* <div className='projects__grid'>
                {projects.map((project) => (
                  <ProjectContainer key={uniqid()} project={project} />
                ))}
              </div> */}

         <div className="projects_List_Container">
              <div className="project_item_Container">
                 
              </div>
                <ProjectItemView project={ProjectList[selectedProjectItem]}/>
              <div className="projects_List">
               {projects.map((element,i)=><ProjectItemList key={i} id={i} getselected={getItemsSelected} selectedID={selectedProjectItem} project={element}/>)}
              </div>

          </div>




    </section>
  )
}

export default Projects
