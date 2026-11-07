import { ArrowIcon, WalletIcon } from './Icons';

function ProjectCard({ project, index }) {
  return (
    <a
      aria-label={`${project.name} on GitHub`}
      className="project-card"
      href={project.url}
      rel="noreferrer"
      target="_blank"
    >
      <div className={`project-visual ${project.visual}`}>
        <span className="visual-tag">{project.tag}</span>
        <span className="visual-index">{String(index + 1).padStart(2, '0')}</span>
        <span aria-hidden="true" className={`visual-symbol${project.mark === 'wallet' ? ' wallet-symbol' : ''}`}>
          {project.mark === 'wallet' ? <WalletIcon /> : project.mark}
        </span>
        <span className="visual-word">{project.repository}</span>
      </div>
      <div className="project-info">
        <div>
          <span className="project-type">{project.category}</span>
          <h3>{project.name}</h3>
        </div>
        <span className="project-arrow" aria-hidden="true"><ArrowIcon diagonal /></span>
      </div>
      <p className="project-note">{project.description}</p>
    </a>
  )
}

export default ProjectCard;