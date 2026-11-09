import { Link } from 'react-router';
import { ArrowIcon } from '../../components/Icons.jsx';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import { projects } from '../../data/projects.js';
import logo from '../../assets/logo.png';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <>
      <title>Home</title>

      <section className={`${styles.hero} section-wrap`}>
        <div className={styles.introSection}>
          <div className={styles.eyebrow}><span className={styles.statusDot} />READY FOR THE NEXT ADVENTURE</div>
          <h1>
            You can&apos;t put
            <br />
            a price on
            <br />
            <span>success</span>
          </h1>
          <p className={styles.heroDescription}>
            Hey, I&apos;m Ayman Ali. Welcome to my corner of the internet. <br/>
            A place to show the things I make and learn.
          </p>
          <Link className={styles.primaryLink} to="/projects">
            Explore my work <ArrowIcon />
          </Link>
        </div>

        <div className={styles.heroArt} aria-label="Ayman Ali logo">
          <div className={styles.artOrbit} />
          <div className={`${styles.artOrbit} ${styles.orbitTwo}`} />
          <div className={styles.artGlow} />
          <img className={styles.heroLogo} src={logo} alt="Ayman Ali logo" />
          <div className={styles.artCaption}>
            <span className={styles.captionLine} />
            <span>DISCIPLINE</span>
          </div>
          <span className={styles.artIndex}>6174</span>
        </div>
      </section>

      <div className={styles.ticker} aria-label="A little about me">
        <div className={styles.tickerTrack}>
          <span>ALWAYS LEARNING</span><i />
          <span>ALWAYS IMPROVING</span>
        </div>
      </div>

      <section className="content-section section-wrap">
        <div className="section-heading">
          <div>
            <span className="section-kicker">THINGS I MADE</span>
            <h2>My Artifacts<span className="accent">.</span></h2>
          </div>
          <p>Projects that helped me learn and grow as a software engineer.</p>
        </div>
        <div className="project-grid">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard index={index} key={project.repository} project={project} />
          ))}
        </div>
        <Link className={`text-link ${styles.projectsMore}`} to="/projects">
          See all projects <ArrowIcon />
        </Link>
      </section>

      <section className={`about-section ${styles.homeAboutPreview}`}>
        <div className={`section-wrap ${styles.homeAboutLayout}`}>
          <div className={styles.homeAboutHeading}>
            <span className="section-kicker">BEYOND THE CODE</span>
            <h2>Who am <span>I</span> ?</h2>
          </div>
          <div className={styles.homeAboutCopy}>
            <p>
              I&apos;m a Computer Science student at ADA University, a
              programmer in progress, and an internationally certified
              Taekwondo black belt. I work with Python, C, React, and SQL —
              and find inspiration in technology, cars, photography, and a
              good mystery novel.
            </p>
            <Link className="text-link" to="/about">
              Get to know me <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage;