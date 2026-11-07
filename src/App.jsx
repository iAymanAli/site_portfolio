import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'

const sections = ['Home', 'Projects', 'About', 'Accounts', 'Repo']

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M4 12 12 4M5 4h7v7" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10m-4-4 4 4-4 4" />
    </svg>
  )
}

function ThemeIcon({ isDark }) {
  return isDark ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" />
    </svg>
  )
}

function App() {
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem('portfolio-theme') || 'light',
  )
  const isDark = theme === 'dark'

  function toggleTheme() {
    const nextTheme = isDark ? 'light' : 'dark'
    window.localStorage.setItem('portfolio-theme', nextTheme)
    setTheme(nextTheme)
  }

  return (
    <div className="site-shell" data-theme={theme}>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Ayman Ali, home">
          <img src={logo} alt="" />
          <span>Ayman Ali</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {sections.map((section) => (
            <a
              className={section === 'Home' ? 'nav-link active' : 'nav-link'}
              href={`#${section.toLowerCase()}`}
              key={section}
            >
              {section}
            </a>
          ))}
        </nav>

        <button
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          className="theme-toggle"
          onClick={toggleTheme}
          type="button"
        >
          <ThemeIcon isDark={isDark} />
        </button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
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
            <a className="primary-link" href="#projects">
              Explore my work <ArrowIcon />
            </a>
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

        <section className="content-section section-wrap" id="projects">
          <div className="section-heading">
            <div>
              <span className="section-kicker">01 / THE THINGS I MAKE</span>
              <h2>Selected projects<span className="accent">.</span></h2>
            </div>
            <p>A few things I&apos;ve been working on lately.</p>
          </div>

          <div className="project-grid">
            <article className="project-card project-featured">
              <div className="project-visual visual-sunrise">
                <span className="visual-tag">FEATURED</span>
                <div className="sun-shape" />
                <div className="visual-horizon" />
                <span className="visual-word">PROJECT<br />ONE</span>
              </div>
              <div className="project-info">
                <div>
                  <span className="project-type">WEB · 2025</span>
                  <h3>Your next big idea</h3>
                </div>
                <span className="project-arrow" aria-hidden="true"><ArrowIcon diagonal /></span>
              </div>
              <p className="project-note">A space for a project you&apos;re proud of.</p>
            </article>

            <article className="project-card">
              <div className="project-visual visual-grid">
                <span className="visual-tag">EXPLORATION</span>
                <div className="grid-window">
                  <span /><span /><span /><span />
                </div>
                <span className="visual-word">PROJECT<br />TWO</span>
              </div>
              <div className="project-info">
                <div>
                  <span className="project-type">DESIGN · 2025</span>
                  <h3>Something in progress</h3>
                </div>
                <span className="project-arrow" aria-hidden="true"><ArrowIcon diagonal /></span>
              </div>
              <p className="project-note">Swap this for a project description.</p>
            </article>
          </div>
          <p className="edit-hint">Make these yours by adding your project details and links.</p>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-layout">
            <div className="about-mark">
              <span className="section-kicker">02 / A LITTLE ABOUT ME</span>
              <span className="about-number">A<span>.</span></span>
            </div>
            <div className="about-copy">
              <h2>Good work starts with <span>good questions.</span></h2>
              <p>
                I&apos;m Ayman — a curious mind who enjoys turning ideas into
                thoughtful digital experiences. I care about the details,
                value keeping things simple, and believe there&apos;s always
                something new to learn.
              </p>
              <a className="text-link" href="#accounts">
                A little more about me <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="accounts">
          <div className="section-heading">
            <div>
              <span className="section-kicker">03 / AROUND THE INTERNET</span>
              <h2>Find me elsewhere<span className="accent">.</span></h2>
            </div>
            <p>Places where I share, connect, and keep learning.</p>
          </div>
          <div className="account-list">
            {[
              ['01', 'GitHub', 'Code, experiments & open source'],
              ['02', 'LinkedIn', 'Professional updates & connections'],
              ['03', 'Email', 'A good place to start a conversation'],
            ].map(([number, name, description]) => (
              <div className="account-row" key={name}>
                <span className="account-number">{number}</span>
                <h3>{name}</h3>
                <p>{description}</p>
                <span className="account-placeholder">ADD YOUR LINK</span>
              </div>
            ))}
          </div>
          <p className="edit-hint">Add your profile and contact links here when you&apos;re ready.</p>
        </section>

        <section className="repo-section" id="repo">
          <div className="section-wrap repo-layout">
            <div>
              <span className="section-kicker">04 / BUILT IN THE OPEN</span>
              <h2>A home for the code<br />behind the ideas<span className="accent">.</span></h2>
            </div>
            <div className="repo-card">
              <div className="repo-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.2 14 3.5a13 13 0 0 0-7 0C3.5 1.2 2.3 1.5 2.3 1.5a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 .8 8.7c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 6 18.1V22" transform="translate(2 0)" />
                </svg>
              </div>
              <div>
                <span className="repo-label">GITHUB REPOSITORIES</span>
                <p>Your code, experiments, and contributions all in one place.</p>
              </div>
              <span className="repo-coming">PROFILE LINK COMING SOON</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <img src={logo} alt="" />
          <span>Ayman Ali</span>
        </a>
        <p>Thoughtfully made, one pixel at a time.</p>
        <a className="back-top" href="#home">BACK TO TOP <ArrowIcon diagonal /></a>
      </footer>
    </div>
  )
}

export default App
