import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Button from "../../components/Button/Button";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className={styles.navbar}>
        <a className="logo">
          <img src={Logo} style={{ maxWidth: "74px", height: "74px" }} />
        </a>
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-item"]}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles["nav-list"]}>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="nav-buttons">
          <Button
            bgColor="white"
            color="black"
            borderRadius="8px"
            border="2px solid black"
            boxShadow="none"
          >
            Recent Episodes
          </Button>
          <Button border="2px solid black" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
