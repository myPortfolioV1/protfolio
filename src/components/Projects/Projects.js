import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='NEFFEX ' className='section projects'>
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

          </div>

     </div>


    </section>
  )
}

export default Projects
