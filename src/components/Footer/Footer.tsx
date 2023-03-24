import styles from "./Footer.module.css";

import gitLogo from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className={`${styles.footer} moveUp`}>
      <div className={`${styles.footerContent} container`}>
        JsonBlog ©<br />
        Feito por Kirmct
        <div className={styles.footerContact}>
          <a href="https://www.linkedin.com/in/kirmct/" target="_blank">
            <img src={linkedin} width={18} height={18} />
            Linkedin
          </a>
          <a href="https://github.com/Kirmct" target="_blank">
            <img src={gitLogo} width={18} height={18} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
