import LemonFooter from "../image/little-lemon-footer.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer-background">
      <section className="footer-flex">
        <ul className="img-footer">
          <img src={LemonFooter} alt="little lemon footer img"></img>
        </ul>

        <ul className="Nav-footer">
          <li>
            <h1>Navigation</h1>
          </li>
          <Link className="link-noline-white Nav-hover-effect " to="/">
            Home
          </Link>
          <Link className="link-noline-white Nav-hover-effect" to="/about">
            About
          </Link>
          <Link className="link-noline-white Nav-hover-effect" to="/menu">
            Menu
          </Link>
          <Link
            className="link-noline-white Nav-hover-effect"
            to="/reservation"
          >
            Reservation
          </Link>
          <Link className="link-noline-white Nav-hover-effect" to="/order">
            Order Online
          </Link>
          <Link className="link-noline-white Nav-hover-effect" to="/login">
            Login
          </Link>
        </ul>

        <ul className="Contact-footer ">
          <li>
            <h1>Contact</h1>
          </li>
          <li>
            <p>2395 Maldove Way,</p>
            <p>Chicago Illinois</p>
          </li>
          <li>
            <p>(629)-243-6827</p>
          </li>
          <li>
            <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              info@littlelemon.com
            </a>
          </li>
        </ul>

        <ul className="Contact-footer">
          <li>
            <h1>Connet</h1>
          </li>
          <li>
            <a
              href="https://www.facebook.com/thelittlelemonshop/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/littlelemonmoon/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=3Li-FfypZYE"
              target="_blank"
              rel="noreferrer"
            >
              Join us!
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
