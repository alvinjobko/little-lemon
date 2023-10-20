import logo from "../image/Logo.svg";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { Link } from "react-router-dom";
import Routing from "./Routing";
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav>
      <ul className="direactBar">
        <li className="Nav-hover-pointer-effect">
          <a herf="/">
            <img src={logo} alt="logo" />
          </a>
        </li>
        <div
          className="hambergerIcon Nav-hover-pointer-effect"
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={"nav-link1" + (menuOpen ? "-Check" : "")}>
            <Link className="link-noline Nav-hover-effect" to="/">Home</Link>
            <Link className="link-noline Nav-hover-effect" to="/about">About</Link>
            <Link className="link-noline Nav-hover-effect" to="/menu">Menu</Link>
            <Link className="link-noline Nav-hover-effect" to="/reservation">Reservation</Link>
          <li className="Nav-hover-effect">
            <a herf="#">Order Online</a>
          </li>
          <li className="Nav-hover-effect">
            <a herf="#">Login</a>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Nav;
