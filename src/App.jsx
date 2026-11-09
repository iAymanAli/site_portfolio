import { useState } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router';

import HomePage from './pages/HomePage/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import AccountsPage from './pages/AccountsPage/AccountsPage.jsx';
import RepoPage from './pages/RepoPage/RepoPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop';
import { ArrowIcon } from './components/Icons';

import logo from './assets/logo.png';
import './App.css';

function App() {
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem('portfolio-theme') || 'light',
  )


  return (
    <div className="site-shell" data-theme={theme}>
      <ScrollToTop />

      <Navbar logo={logo} theme={theme} setTheme={setTheme} />

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
