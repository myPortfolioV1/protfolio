import { useState } from 'react'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import ProjectItemList from '../projectItemList/ProjectItemList'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  let [projectItem,setProjectIem]=useState(1);
  let [ProjectList,setProjectList]=useState(projects);
  

  return (
    <section id='NEFFEX ' className='sectionProjects'>
       <h2 className='section__title'>Projects</h2>
 
           

              {/* <div className='projects__grid'>
                {projects.map((project) => (
                  <ProjectContainer key={uniqid()} project={project} />
                ))}
              </div> */}

         <div className="projects_List_Container">
              <div className="project_item_Container">
             
              </div>

              <div className="projects_List">
               {projects.map((element,i)=><ProjectItemList project={element}/>)}
              </div>

          </div>




    </section>
  )
}

export default Projects
