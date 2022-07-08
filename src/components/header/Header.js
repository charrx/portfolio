import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.nav_bar_container}>
      <div className={styles.nav_item_container}>
        <p>
          <span className={styles.number}>01.</span> Me
        </p>
        <p>
          <span className={styles.number}>02.</span> Experience
        </p>
        <p>
          <span className={styles.number}>03.</span> Projects
        </p>
        <p>
          <span className={styles.number}>04.</span> Contact
        </p>
      </div>
    </div>
  );
};

export default Header;
