import { Link, useLocation } from "react-router";
import { ArrowIcon } from "../Icons";
import styles from "./Footer.module.css";

function Footer({ logo }) {
  const { pathname } = useLocation();

  function backToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <footer className={`${styles.siteFooter} section-wrap`}>
      <Link className={`brand ${styles.footerBrand}`} to="/">
        <img src={logo} alt="" />
        <span>Ayman Ali</span>
      </Link>
      <p>Thoughtfully made, one pixel at a time.</p>
      <Link className={styles.backTop} to={pathname} onClick={backToTop} >
        BACK TO TOP <ArrowIcon diagonal />
      </Link>
    </footer>
  );
}

export default Footer;