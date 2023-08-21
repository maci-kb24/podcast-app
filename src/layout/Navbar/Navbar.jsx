import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Button from "../../components/Button/Button";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className={styles.navbar}>
        <Link className="logo" to="/">
          <img src={Logo} style={{ maxWidth: "74px", height: "74px" }} />
        </Link>

        <ul className={styles["nav-list"]}>
          <li className={styles["nav-item"]}>
            <Link to="/">Episodes</Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link to="#">More</Link>
          </li>
        </ul>
        <div className="nav-buttons">
          <Button
            bgColor="white"
            color="black"
            borderRadius="8px"
            border="2px solid black"
            boxShadow="none"
            padding="8px 19px"
          >
            Recent Episodes
          </Button>
          <Button
            border="2px solid black"
            padding="8px 19px"
            margin="0px 0px 0px 44px"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
