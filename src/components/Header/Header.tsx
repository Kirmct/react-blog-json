import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} `}>
      <nav className={`container ${styles.nav} moveDown`}>
        <Link to="/react-blog-json">
          <div>JsonBlog</div>
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link to="react-blog-json/">Posts </Link>
          </li>
          <li>
            <Link to="react-blog-json/users"> Users </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
