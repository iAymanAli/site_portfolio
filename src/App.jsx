import { useState } from 'react';
import { Link, NavLink, Navigate, Route, Routes } from 'react-router';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import AccountsPage from './pages/AccountsPage';
import RepoPage from './pages/RepoPage';
import ScrollToTop from './components/ScrollToTop';
import { ThemeIcon, ArrowIcon } from './components/Icons';

import logo from './assets/logo.png';
import './App.css';

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Accounts', to: '/accounts' },
  { label: 'Repo', to: '/repo' },
]


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

export default App
