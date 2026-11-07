import { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router'
import './App.css'
import logo from './assets/logo.png'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Accounts', to: '/accounts' },
  { label: 'Repo', to: '/repo' },
]

const projects = [
  {
    name: 'amr — Custom Shell',
    category: 'SYSTEMS · C',
    description:
      'A Linux shell built from scratch, with Bash-inspired behavior, command autocomplete, history, and built-in commands.',
    repository: 'amr_shell',
    url: 'https://github.com/iAymanAli/amr_shell',
    tag: 'SYSTEMS',
    mark: '$ _',
    visual: 'visual-shell',
  },
  {
    name: 'QR3H Bracket Generator',
    category: 'WEB · PYTHON · FLASK',
    description:
      'A tournament bracket generator that shuffles participants, handles byes, and creates clear brackets for events.',
    repository: 'QUR3H_website',
    url: 'https://github.com/iAymanAli/QUR3H_website',
    tag: 'WEB APP',
    mark: 'A/B',
    visual: 'visual-brackets',
  },
  {
    name: 'A Computer, From the Gates Up',
    category: 'COMPUTER ARCHITECTURE',
    description:
      'An exploration of logic circuits, memory, an ALU, and the components of a conceptual SAP-1 computer.',
    repository: 'My_SAP1_Computer_Project',
    url: 'https://github.com/iAymanAli/My_SAP1_Computer_Project',
    tag: 'HARDWARE',
    mark: '01',
    visual: 'visual-computer',
  },
  {
    name: 'Algorithms & Data Structures',
    category: 'FOUNDATIONS · C',
    description:
      'Search and sort algorithms, linked lists, stacks, queues, and hash tables implemented to understand how they work under the hood.',
    repository: 'Algorithms_and_Data_structures',
    url: 'https://github.com/iAymanAli/Algorithms_and_Data_structures',
    tag: 'LEARNING',
    mark: '{ }',
    visual: 'visual-algorithms',
  },
  {
    name: 'Expense Tracker',
    category: 'PYTHON · CLI',
    description:
      'A command-line finance tracker for recording transactions, setting budgets, reviewing reports, and visualizing spending.',
    repository: 'Expense_Tracker',
    url: 'https://github.com/iAymanAli/Expense_Tracker',
    tag: 'CS50 PYTHON',
    mark: 'wallet',
    visual: 'visual-expense',
  },
  {
    name: 'Command-line To-do List',
    category: 'PYTHON · CLI',
    description:
      'A lightweight task-list program created while learning Python fundamentals.',
    repository: 'Ayman_to_do_list_program',
    url: 'https://github.com/iAymanAli/Ayman_to_do_list_program',
    tag: 'PYTHON',
    mark: '✓',
    visual: 'visual-todo',
  },
]

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

function WalletIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" fill="none">
      <path d="M12 19.5h35a5 5 0 0 1 5 5v25a5 5 0 0 1-5 5H17a7 7 0 0 1-7-7v-25a3 3 0 0 1 3-3Z" />
      <path d="M12 19.5 44 12a5 5 0 0 1 6 3.7l.8 3.8M10 28h42" />
      <path d="M42 37h13v11H42a5.5 5.5 0 0 1 0-11Z" />
      <circle cx="44" cy="42.5" r="1" />
    </svg>
  )
}

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
    </>
  )
}

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

function AboutPage() {
  return (
    <section className="about-section about-page">
      <div className="section-wrap about-layout">
        <div className="about-mark">
          <span className="section-kicker">02 / A LITTLE ABOUT ME</span>
          <span className="about-number">A<span>.</span></span>
        </div>
        <div className="about-copy">
          <h1>Good work starts with <span>good questions.</span></h1>
          <p>
            I&apos;m Ayman — a curious mind who enjoys turning ideas into
            thoughtful digital experiences. I care about the details,
            value keeping things simple, and believe there&apos;s always
            something new to learn.
          </p>
          <Link className="text-link" to="/accounts">
            Find me on GitHub <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}

function AccountsPage() {
  return (
    <section className="content-section section-wrap page-section">
      <div className="section-heading">
        <div>
          <span className="section-kicker">03 / AROUND THE INTERNET</span>
          <h1>Find me on GitHub<span className="accent">.</span></h1>
        </div>
        <p>Browse my public projects, experiments, and code.</p>
      </div>
      <div className="account-list">
        <a
          className="account-row"
          href="https://github.com/iAymanAli"
          rel="noreferrer"
          target="_blank"
        >
          <span className="account-number">01</span>
          <h3>GitHub</h3>
          <p>Code, experiments &amp; open source</p>
          <span className="account-placeholder">iAYMANALI ↗</span>
        </a>
      </div>
    </section>
  )
}

function RepoPage() {
  return (
    <section className="repo-section repo-page">
      <div className="section-wrap repo-layout">
        <div>
          <span className="section-kicker">04 / BUILT IN THE OPEN</span>
          <h1>A home for the code<br />behind the ideas<span className="accent">.</span></h1>
        </div>
        <a
          className="repo-card"
          href="https://github.com/iAymanAli?tab=repositories"
          rel="noreferrer"
          target="_blank"
        >
          <div className="repo-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.2 14 3.5a13 13 0 0 0-7 0C3.5 1.2 2.3 1.5 2.3 1.5a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 .8 8.7c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 6 18.1V22" transform="translate(2 0)" />
            </svg>
          </div>
          <div>
            <span className="repo-label">GITHUB REPOSITORIES</span>
            <p>Explore my public repositories and the code behind them.</p>
          </div>
          <span className="repo-coming">VIEW iAYMANALI ON GITHUB ↗</span>
        </a>
      </div>
    </section>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AppLayout() {
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
      <ScrollToTop />
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Ayman Ali, home">
          <img src={logo} alt="" />
          <span>Ayman Ali</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map(({ label, to }) => (
            <NavLink
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end={to === '/'}
              key={to}
              to={to}
            >
              {label}
            </NavLink>
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
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ProjectsPage />} path="/projects" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<AccountsPage />} path="/accounts" />
          <Route element={<RepoPage />} path="/repo" />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Routes>
      </main>

      <footer className="site-footer section-wrap">
        <Link className="brand footer-brand" to="/">
          <img src={logo} alt="" />
          <span>Ayman Ali</span>
        </Link>
        <p>Thoughtfully made, one pixel at a time.</p>
        <Link className="back-top" to="/">BACK TO TOP <ArrowIcon diagonal /></Link>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
