import styles from './RepoPage.module.css';

function RepoPage() {
  return (
    <section className={`${styles.repoSection} ${styles.repoPage}`}>
      <div className={`section-wrap ${styles.repoLayout}`}>
        <div>
          <span className="section-kicker">04 / BUILT IN THE OPEN</span>
          <h1>A home for the code<br />behind the ideas<span className="accent">.</span></h1>
        </div>
        <a
          className={styles.repoCard}
          href="https://github.com/iAymanAli?tab=repositories"
          rel="noreferrer"
          target="_blank"
        >
          <div className={styles.repoIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.2 14 3.5a13 13 0 0 0-7 0C3.5 1.2 2.3 1.5 2.3 1.5a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 .8 8.7c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 6 18.1V22" transform="translate(2 0)" />
            </svg>
          </div>
          <div>
            <span className={styles.repoLabel}>GITHUB REPOSITORIES</span>
            <p>Explore my public repositories and the code behind them.</p>
          </div>
          <span className={styles.repoComing}>VIEW iAymanAli ON GITHUB ↗</span>
        </a>
      </div>
    </section>
  )
}

export default RepoPage;