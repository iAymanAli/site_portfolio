import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import { projects } from '../../data/projects.js';

function ProjectsPage() {
  return (
    <section className="content-section section-wrap page-section">
      <div className="section-heading">
        <div>
          <span className="section-kicker">01 / THE THINGS I MAKE</span>
          <h1>Selected projects<span className="accent">.</span></h1>
        </div>
        <p>Projects and experiments in systems, computer science, and the web.</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard index={index} key={project.repository} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage;