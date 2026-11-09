import { ArrowIcon, WalletIcon } from '../Icons';
import styles from './ProjectCard.module.css';

const visualStyles = {
  'visual-algorithms': styles.visualAlgorithms,
  'visual-brackets': styles.visualBrackets,
  'visual-computer': styles.visualComputer,
  'visual-expense': styles.visualExpense,
  'visual-shell': styles.visualShell,
  'visual-todo': styles.visualTodo,
};

function ProjectCard({ project, index }) {
  return (
    <a
      aria-label={`${project.name} on GitHub`}
      className={styles.projectCard}
      href={project.url}
      rel="noreferrer"
      target="_blank"
    >
      <div className={`${styles.projectVisual} ${visualStyles[project.visual]}`}>
        <span className={styles.visualTag}>{project.tag}</span>
        <span className={styles.visualIndex}>{String(index + 1).padStart(2, '0')}</span>
        <span
          aria-hidden="true"
          className={`${styles.visualSymbol} ${project.mark === 'wallet' ? styles.walletSymbol : ''}`}
        >
          {project.mark === 'wallet' ? <WalletIcon /> : project.mark}
        </span>
        <span className={styles.visualWord}>{project.repository}</span>
      </div>
      <div className={styles.projectInfo}>
        <div>
          <span className={styles.projectType}>{project.category}</span>
          <h3>{project.name}</h3>
        </div>
        <span className={styles.projectArrow} aria-hidden="true"><ArrowIcon diagonal /></span>
      </div>
      <p className={styles.projectNote}>{project.description}</p>
    </a>
  )
}

export default ProjectCard;