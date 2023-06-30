import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a className={styles.link} href="/">
            Home
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.link} href="/cards">
            Cards
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
