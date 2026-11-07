import { Link } from 'react-router';
import { ArrowIcon } from '../components/Icons';

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

export default AboutPage;