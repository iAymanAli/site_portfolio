import styles from './AccountsPage.module.css';

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
      <div className={styles.accountList}>
        <a
          className={styles.accountRow}
          href="https://github.com/iAymanAli"
          rel="noreferrer"
          target="_blank"
        >
          <span className={styles.accountNumber}>01</span>
          <h3>GitHub</h3>
          <p>Code, experiments &amp; open source</p>
          <span className={styles.accountPlaceholder}>iAymanAli ↗</span>
        </a>
      </div>
    </section>
  )
}

export default AccountsPage;