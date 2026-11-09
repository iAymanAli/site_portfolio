import { Link } from 'react-router';
import { ArrowIcon } from '../components/Icons';
import { skills } from '../data/skills.js';
import { interests } from '../data/interests.js';

function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-section">
        <div className="section-wrap about-layout">
          <div className="about-mark">
            <span className="section-kicker">02 / A LITTLE ABOUT ME</span>
            <span className="about-number">A<span>.</span></span>
            <span className="about-mark-caption">STUDENT · BUILDER · ATHLETE</span>
          </div>
          <div className="about-copy">
            <span className="about-overline">HELLO, I&apos;M AYMAN ALI</span>
            <h1>
              Curious by nature.
              <br />
              <span>Driven to understand.</span>
            </h1>
            <p>
              I&apos;m a Computer Science student at ADA University, drawn to
              the way technology can turn bold ideas into something real.
              Whether I&apos;m learning a new concept or building a project, I
              love getting beyond the surface and figuring out how things work.
            </p>
            <Link className="text-link" to="/projects">
              A few things I&apos;ve built <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-wrap about-details">
        <section className="about-panel study-panel">
          <span className="section-kicker">01 / WHAT I&apos;M LEARNING</span>
          <h2>Computer science, hands-on.</h2>
          <p>
            Studying Computer Science at ADA University and building my
            foundations one project at a time.
          </p>
          <div className="skill-list" aria-label="Languages and tools">
            {skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
          </div>
        </section>

        <section className="about-panel athlete-panel">
          <span className="section-kicker">02 / DISCIPLINE IN MOTION</span>
          <div className="belt-mark" aria-hidden="true">
            <span />
            <span />
          </div>
          <h2>Black belt mindset.</h2>
          <p>
            An internationally certified Taekwondo athlete. Years of practice
            have taught me focus, resilience, and the value of showing up
            consistently.
          </p>
          <span className="athlete-caption">TAEKWONDO · BLACK BELT</span>
        </section>
      </div>

      <section className="section-wrap interests-section">
        <div className="interests-heading">
          <div>
            <span className="section-kicker">03 / THINGS THAT SPARK IDEAS</span>
            <h2>Off-screen, too<span className="accent">.</span></h2>
          </div>
          <p>A few of the things that keep me curious.</p>
        </div>
        <div className="interest-list">
          {interests.map((interest, index) => (
            <span className="interest-item" key={interest}>
              <span className="interest-index">{String(index + 1).padStart(2, '0')}</span>
              {interest}
            </span>
          ))}
        </div>
        <p className="reading-note">
          Always happy to get lost in a Sherlock Holmes mystery or an Agatha
          Christie novel.
        </p>
      </section>

      <section className="about-ambition">
        <div className="section-wrap ambition-inner">
          <span className="section-kicker">STILL LEARNING. ALWAYS BUILDING.</span>
          <h2>
            One day, I hope to become
            <br />
            a <span>master programmer.</span>
          </h2>
          <p>
            Until then: stay curious, keep practicing, and make something
            meaningful.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
