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
          <span className="account-placeholder">iAymanAli ↗</span>
        </a>
      </div>
    </section>
  )
}

export default AccountsPage;