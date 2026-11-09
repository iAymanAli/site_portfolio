import { Link, NavLink } from 'react-router';
import { ThemeIcon } from '../Icons';
import styles from './Navbar.module.css';

function Navbar({ logo, theme, setTheme }) {

  function toggleTheme() {
    const nextTheme = isDark ? 'light' : 'dark'
    window.localStorage.setItem('portfolio-theme', nextTheme)
    setTheme(nextTheme)
  }

  const isDark = theme === 'dark'

  const navigation = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'Accounts', to: '/accounts' },
    { label: 'Repo', to: '/repo' },
  ]

  return (
    <header className={styles.siteHeader}>
      <Link className="brand" to="/" aria-label="Ayman Ali, home">
        <img src={logo} alt="" />
        <span>Ayman Ali</span>
      </Link>

      <nav className={styles.mainNav} aria-label="Main navigation">
        {navigation.map(({ label, to }) => (
          <NavLink
            className={({ isActive }) => isActive
              ? `${styles.navLink} ${styles.active}`
              : styles.navLink}
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
        className={styles.themeToggle}
        onClick={toggleTheme}
        type="button"
      >
        <ThemeIcon isDark={isDark} />
      </button>
    </header>
  );
}

export default Navbar;