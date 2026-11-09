import { Link } from 'react-router';
import { ArrowIcon } from '../../components/Icons.jsx';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import { projects } from '../../data/projects.js';
import logo from '../../assets/logo.png';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <>
      <section className={`${styles.hero} section-wrap`}>
        <div>
          <div className={styles.eyebrow}><span className={styles.statusDot} /> AVAILABLE FOR WHAT&apos;S NEXT</div>
          <h1>
            A little bit of
            <br />
            <span>curiosity</span> goes
            <br />
            a long way.
          </h1>
          <p className={styles.heroDescription}>
            Hey, I&apos;m Ayman Ali. Welcome to my corner of the internet — a
            place for the things I make, the things I learn, and what I&apos;m
            exploring next.
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
            <span>MADE WITH INTENTION</span>
          </div>
          <span className={styles.artIndex}>01 — 05</span>
        </div>
      </section>

      <div className={styles.ticker} aria-label="A little about me">
        <div className={styles.tickerTrack}>
          <span>CURIOUS BY NATURE</span><i />
          <span>MAKING THINGS FOR THE WEB</span><i />
          <span>ALWAYS LEARNING</span><i />
          <span>CURIOUS BY NATURE</span><i />
        </div>
      </div>

      <section className="content-section section-wrap">
        <div className="section-heading">
          <div>
            <span className="section-kicker">01 / THE THINGS I MAKE</span>
            <h2>Selected projects<span className="accent">.</span></h2>
          </div>
          <p>A few of my biggest projects, from computer fundamentals to the web.</p>
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
            <span className="section-kicker">02 / BEYOND THE CODE</span>
            <h2>A little about <span>me.</span></h2>
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