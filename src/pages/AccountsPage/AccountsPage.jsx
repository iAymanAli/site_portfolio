import { accountsData } from '../../data/accountsData.js';
import styles from './AccountsPage.module.css';

function AccountsPage({ theme }) {
  return (
    <section className="content-section section-wrap page-section">
      <div className="section-heading">
        <div>
          <span className="section-kicker">AROUND THE INTERNET</span>
          <h1>Find me around the web<span className="accent">.</span></h1>
        </div>
        <p>Browse my profiles and content across the internet.</p>
      </div>
      <div className={styles.accountGrid}>
        {accountsData.map((account) => (
          <a
            aria-label={`${account.name}: ${account.description}`}
            className={styles.accountCard}
            href={account.url}
            key={account.id}
            rel="noreferrer"
            target="_blank"
          >
            <span className={styles.accountIcon} aria-hidden="true">
              <img 
              alt={`${account.name}-logo`} 
              src={(account.name === 'GitHub' && theme === 'dark') ? `${account.icon}/white` : account.icon} 
              />
            </span>
            <span className={styles.accountName}>{account.name}</span>
            <span className={styles.accountDescription}>{account.description}</span>
            <span className={styles.accountLink}>Visit profile <span aria-hidden="true">↗</span></span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default AccountsPage;
