import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
