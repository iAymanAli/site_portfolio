import { Link } from 'react-router';
import { ArrowIcon } from '../../components/Icons.jsx';
import { skills } from '../../data/skills.js';
import { interests } from '../../data/interests.js';
import styles from './AboutPage.module.css';
import kukkiwonLogo from '../../assets/kukkiwon_logo.png';

function AboutPage() {
  return (
    <>
      <title>About</title>

      <div className={styles.aboutPage}>
        <section className="about-section">
          <div className={`section-wrap ${styles.aboutLayout}`}>
            <div className={styles.aboutMark}>
              <span className="section-kicker">Who am I ?</span>
              <span className={styles.aboutNumber}>Me<span>.</span></span>
              <span className={styles.aboutMarkCaption}>STUDENT · ENGINEER · ATHLETE</span>
            </div>
            <div className={styles.aboutCopy}>
              <span className={styles.aboutOverline}>HELLO, I&apos;M AYMAN ALI</span>
              <h1>
                Curious To learn.
                <br />
                <span>Driven to understand.</span>
              </h1>
              <p>
                I&apos;m a Computer Science student at ADA University, fascinated by
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

        <div className={`section-wrap ${styles.aboutDetails}`}>
          <section className={styles.aboutPanel}>
            <span className="section-kicker">01 / WHAT I&apos;M LEARNING</span>
            <h2>Computer Science</h2>
            <p>
              Studying Computer Science at ADA University, building my
              foundations one project at a time, and cultivating my intellectual capabilities.
            </p>
            <div className={styles.skillList} aria-label="Languages and tools">
              {skills.map((skill) => <span className={styles.skillChip} key={skill}>{skill}</span>)}
            </div>
          </section>

          <section className={`${styles.aboutPanel} ${styles.athletePanel}`}>
            <span className="section-kicker">02 / DISCIPLINE IN MOTION</span>
            <img
              className={styles.beltMark}
              src={kukkiwonLogo}
              alt="Kukkiwon"
              loading="lazy"
              decoding="async"
            />
            <h2>Taekwondo Black belt. Relentless mindset.</h2>
            <p>
              An internationally certified Taekwondo athlete. Years of practice
              have taught me focus, resilience, and discipline.
            </p>
            <span className={styles.athleteCaption}>TAEKWONDO · BLACK BELT · Kukkiwon</span>
          </section>
        </div>

        <section className={`section-wrap ${styles.interestsSection}`}>
          <div className={styles.interestsHeading}>
            <div>
              <span className="section-kicker">03 / THINGS THAT SPARK IDEAS</span>
              <h2>Off-screen, too<span className="accent">.</span></h2>
            </div>
            <p>A few of the things that keep me curious.</p>
          </div>
          <div className={styles.interestList}>
            {interests.map((interest, index) => (
              <span className={styles.interestItem} key={interest}>
                <span className={styles.interestIndex}>{String(index + 1).padStart(2, '0')}</span>
                {interest}
              </span>
            ))}
          </div>
          <p className={styles.readingNote}>
            Always happy to hear a V10 engine, take a good photo, get lost in a Sherlock Holmes mystery,
            fix something, or practice a new technique.
          </p>
        </section>

        <section className={styles.aboutAmbition}>
          <div className={`section-wrap ${styles.ambitionInner}`}>
            <span className="section-kicker">STILL LEARNING. STILL DREAMING.</span>
            <h2>
              One day, I hope to become
              <br />
              a <span>master software engineer.</span>
            </h2>
            <p>
              It is difficult, but not impossible.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutPage
