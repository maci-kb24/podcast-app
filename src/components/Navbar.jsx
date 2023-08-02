import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <a className="logo">
          <img src={Logo} style={{ width: "74px", height: "74px" }} />
        </a>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
