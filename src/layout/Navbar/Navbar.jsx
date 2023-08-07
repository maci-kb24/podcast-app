import Logo from "../../assets/images/logo.png";
import Button from "../../components/Button/Button";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <a className="logo">
          <img src={Logo} style={{ width: "74px", height: "74px" }} />
        </a>
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-item"]}>Home</li>
          <li className={styles["nav-list"]}>About</li>
          <li className={styles["nav-list"]}>Contact</li>
        </ul>
        <div className="nav-buttons">
          <Button bgColor="white" color="black" border="2px solid black">
            Recent Episodes
          </Button>
          <Button>Subscribe</Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
