import { Link } from 'react-router';
import { ArrowIcon } from '../components/Icons';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects.js';
import logo from '../assets/logo.png';

function HomePage() {
  return (
    <>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR WHAT&apos;S NEXT</div>
          <h1>
            A little bit of
            <br />
            <span>curiosity</span> goes
            <br />
            a long way.
          </h1>
          <p className="hero-description">
            Hey, I&apos;m Ayman Ali. Welcome to my corner of the internet — a
            place for the things I make, the things I learn, and what I&apos;m
            exploring next.
          </p>
          <Link className="primary-link" to="/projects">
            Explore my work <ArrowIcon />
          </Link>
        </div>

        <div className="hero-art" aria-label="Ayman Ali logo">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-glow" />
          <img className="hero-logo" src={logo} alt="Ayman Ali logo" />
          <div className="art-caption">
            <span className="caption-line" />
            <span>MADE WITH INTENTION</span>
          </div>
          <span className="art-index">01 — 05</span>
        </div>
      </section>

      <div className="ticker" aria-label="A little about me">
        <div className="ticker-track">
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
        <Link className="text-link projects-more" to="/projects">
          See all projects <ArrowIcon />
        </Link>
      </section>

      <section className="about-section home-about-preview">
        <div className="section-wrap home-about-layout">
          <div className="home-about-heading">
            <span className="section-kicker">02 / BEYOND THE CODE</span>
            <h2>A little about <span>me.</span></h2>
          </div>
          <div className="home-about-copy">
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